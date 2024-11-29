import { useState, useEffect } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import * as RadioGroup from "@radix-ui/react-radio-group";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Check } from "lucide-react";

interface Variant {
  id: string;
  Varianten_id: {
    Preis: number;
    Attribute: Array<{
      Attribute_id: {
        Ist_Hauptattribut: boolean;
        Attribut: string;
        Attribut_wert?: {
          Attribut_Werte_id?: {
            Wert?: string;
            Media?: {
              Medien_id: {
                Bild: {
                  id: string;
                  title: string;
                };
                Alttext: string;
              };
            };
            Farben?: {
              Farben_id: {
                Farbname: string;
                Farbe: string;
              };
            };
          };
        };
      };
    }>;
  };
}

interface ProductConfiguratorProps {
  variants: Variant[];
  onConfigurationChange: (configuration: { 
    selectedOptions: Record<string, string>;
    selectedVariant: Variant | null;
    showRequiredHints: boolean;
  }) => void;
}

type AttributeType = "Farbe" | "Tischhöhe" | "Tischplattengröße" | "Sitzhöhe" | "Andere";

const ColorSwatch = ({ 
  color, 
  label, 
  isSelected, 
  onClick 
}: { 
  color: string; 
  label: string; 
  isSelected: boolean; 
  onClick: () => void;
}) => (
  <RadioGroup.Item
    value={label}
    className="relative w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    onClick={onClick}
  >
    <div
      className={`
        w-full h-full rounded-full border-2
        ${isSelected ? 'border-indigo-500' : 'border-transparent'}
      `}
      style={{ backgroundColor: color }}
    >
      {isSelected && (
        <div className="absolute -top-1 -right-1 bg-indigo-500 rounded-full p-1">
          <Check className="h-3 w-3 text-white" />
        </div>
      )}
    </div>
  </RadioGroup.Item>
);

const SizeSwatch = ({ 
  value, 
  isSelected, 
  onClick 
}: { 
  value: string; 
  isSelected: boolean; 
  onClick: () => void;
}) => (
  <RadioGroup.Item
    value={value}
    className={`
      px-4 py-2 rounded-md text-sm font-medium
      ${isSelected 
        ? 'bg-indigo-600 text-white' 
        : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
      }
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
    `}
    onClick={onClick}
  >
    {value}
  </RadioGroup.Item>
);

// Helper function to normalize attribute keys
const normalizeAttributeKey = (key: string) => {
  const normalized = key.toLowerCase();
  if (normalized.includes('tischplatten')) {
    return 'tischplattengroesse';
  }
  return normalized;
};

// Define available attributes and their display names
const attributeConfig = {
  farbe: { display: "Farbe", key: "farbe", type: "color" },
  tischhoehe: { display: "Tischhöhe", key: "tischhoehe", type: "size" },
  sitzhoehe: { display: "Sitzhöhe", key: "sitzhoehe", type: "size" },
  tischplattengroesse: { display: "Tischplattengröße", key: "tischplattengroesse", type: "size" },
  'tischplatten-groesse': { display: "Tischplattengröße", key: "tischplatten-groesse", type: "size" },
  tischplattengrosse: { display: "Tischplattengröße", key: "tischplattengrosse", type: "size" },
  'tischplattengröße': { display: "Tischplattengröße", key: "tischplattengröße", type: "size" }
} as const;

export function ProductConfigurator({ variants, onConfigurationChange }: ProductConfiguratorProps) {
  // Get the product ID from the first variant
  const productId = variants[0]?.Varianten_id?.Produkt_id?.id;
  
  // Local storage keys
  const getStorageKey = (key: string) => `product_${productId}_${key}`;

  // Find the main attribute first
  const mainAttribute = variants[0]?.Varianten_id.Attribute.find(
    attr => attr.Attribute_id.Ist_Hauptattribut
  );
  
  const mainAttributeKey = mainAttribute ? normalizeAttributeKey(mainAttribute.Attribute_id.Attribut) : null;

  // Get initial value for main attribute
  const getInitialMainAttributeValue = () => {
    if (!mainAttribute || !mainAttributeKey) return null;

    if (mainAttributeKey === 'farbe') {
      const colorData = mainAttribute.Attribute_id.Attribut_wert?.[0]?.Attribut_Werte_id?.Farben?.[0]?.Farben_id;
      if (colorData) {
        // Also set the initial variant when setting the main attribute
        return {
          value: colorData.Farbname,
          variant: variants[0]
        };
      }
    } else {
      const value = mainAttribute.Attribute_id.Attribut_wert?.[0]?.Attribut_Werte_id?.Wert;
      if (value) {
        return {
          value,
          variant: variants[0]
        };
      }
    }
    return null;
  };

  // Initialize state with only the main attribute preselected
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    const initialMainAttribute = getInitialMainAttributeValue();
    if (initialMainAttribute && mainAttributeKey) {
      return { [mainAttributeKey]: initialMainAttribute.value };
    }
    return {};
  });

  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(() => {
    const initialMainAttribute = getInitialMainAttributeValue();
    return initialMainAttribute?.variant || null;
  });

  const [showRequiredHints, setShowRequiredHints] = useState(false);

  // Notify parent of initial selection
  useEffect(() => {
    if (mainAttributeKey && selectedOptions[mainAttributeKey] && selectedVariant) {
      onConfigurationChange({
        selectedOptions,
        selectedVariant,
        showRequiredHints
      });
    }
  }, []);

  // Save to local storage whenever selections change
  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(getStorageKey('selectedOptions'), JSON.stringify(selectedOptions));
  }, [selectedOptions, productId]);

  useEffect(() => {
    if (typeof window === 'undefined' || !selectedVariant) return;
    localStorage.setItem(getStorageKey('selectedVariantId'), selectedVariant.Varianten_id.id);
  }, [selectedVariant, productId]);

  const handleOptionSelect = (attributeName: string, value: string, variant: Variant) => {
    setSelectedOptions(prev => {
      const newOptions = { ...prev, [attributeName]: value };
      return newOptions;
    });
    setSelectedVariant(variant);
    onConfigurationChange({
      selectedOptions: { ...selectedOptions, [attributeName]: value },
      selectedVariant: variant,
      showRequiredHints
    });
  };

  // Update this when parent notifies of add to cart attempt
  useEffect(() => {
    const handleAddToCartAttempt = () => {
      setShowRequiredHints(true);
    };

    window.addEventListener('addToCartAttempt', handleAddToCartAttempt);
    return () => {
      window.removeEventListener('addToCartAttempt', handleAddToCartAttempt);
    };
  }, []);

  // Get all required attributes
  const getRequiredAttributes = () => {
    const attributes = new Set<string>();
    variants[0]?.Varianten_id.Attribute.forEach(attr => {
      const key = normalizeAttributeKey(attr.Attribute_id.Attribut);
      attributes.add(key);
    });
    return Array.from(attributes);
  };

  const requiredAttributes = getRequiredAttributes();

  // Check if all required attributes are selected
  const getMissingAttributes = () => {
    return requiredAttributes.filter(attr => !selectedOptions[attr]);
  };

  // Get all values for the main attribute from all variants
  const mainAttributeValues = mainAttributeKey ? variants.map(variant => {
    const attrData = variant.Varianten_id.Attribute.find(
      attr => normalizeAttributeKey(attr.Attribute_id.Attribut) === mainAttributeKey
    );

    if (mainAttributeKey === 'farbe') {
      const colorData = attrData?.Attribute_id.Attribut_wert?.[0]?.Attribut_Werte_id?.Farben?.[0]?.Farben_id;
      return {
        name: colorData?.Farbname || '',
        hex: colorData?.Farbe || '',
        variant: variant
      };
    } else {
      const value = attrData?.Attribute_id.Attribut_wert?.[0]?.Attribut_Werte_id?.Wert;
      return value ? {
        value,
        variant
      } : null;
    }
  }).filter((item): item is NonNullable<typeof item> => item !== null) : [];

  // Function to get attribute values for the current variant
  const getAttributeValues = (attributeKey: string) => {
    if (!selectedVariant) return [];

    const attributeData = selectedVariant.Varianten_id.Attribute.find(
      attr => normalizeAttributeKey(attr.Attribute_id.Attribut) === attributeKey
    );

    if (!attributeData) return [];

    // Get values for the current variant only
    if (attributeKey === 'farbe') {
      // Get all color values from the attribute
      const colorValues = attributeData.Attribute_id.Attribut_wert?.reduce<Array<{value: string; hex: string; variant: Variant}>>((acc, wert) => {
        const colors = wert.Attribut_Werte_id?.Farben || [];
        const validColors = colors.map(color => ({
          value: color.Farben_id?.Farbname || '',
          hex: color.Farben_id?.Farbe || '',
          variant: selectedVariant
        })).filter(color => color.value && color.hex);
        return [...acc, ...validColors];
      }, []) || [];
      
      return colorValues;
    } else {
      const values = attributeData.Attribute_id.Attribut_wert?.map(wert => ({
        value: wert.Attribut_Werte_id?.Wert || '',
        variant: selectedVariant
      })).filter(item => item.value) || [];
      return values;
    }
  };

  // Check if the current variant has a specific attribute
  const hasAttribute = (attributeKey: string) => {
    return selectedVariant?.Varianten_id.Attribute.some(
      attr => normalizeAttributeKey(attr.Attribute_id.Attribut) === attributeKey &&
      !attr.Attribute_id.Ist_Hauptattribut // Only show as regular attribute if not main
    ) ?? false;
  };

  return (
    <Tooltip.Provider delayDuration={200}>
      <div className="space-y-6">
        {/* Main attribute selector */}
        {mainAttributeValues.length > 0 && mainAttributeKey && (
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">
              {attributeConfig[mainAttributeKey as keyof typeof attributeConfig]?.display || mainAttributeKey}
            </h3>
            <div className="flex flex-wrap gap-2">
              {mainAttributeValues.map((item) => {
                if ('hex' in item) {
                  return (
                    <Tooltip.Root key={item.name}>
                      <Tooltip.Trigger asChild>
                        <button
                          onClick={() => handleOptionSelect(mainAttributeKey, item.name, item.variant)}
                          className={`
                            relative w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500
                            ${selectedOptions[mainAttributeKey] === item.name ? 'ring-2 ring-indigo-500' : 'ring-1 ring-gray-200'}
                          `}
                        >
                          <div
                            className="w-full h-full rounded-full"
                            style={{ backgroundColor: item.hex }}
                          />
                          {selectedOptions[mainAttributeKey] === item.name && (
                            <div className="absolute -top-0.5 -right-0.5 bg-indigo-500 rounded-full p-0.5">
                              <Check className="h-2 w-2 text-white" />
                            </div>
                          )}
                        </button>
                      </Tooltip.Trigger>
                      <Tooltip.Portal>
                        <Tooltip.Content
                          className="bg-gray-900 text-white px-2 py-1 rounded text-sm"
                          sideOffset={5}
                        >
                          {item.name}
                          <Tooltip.Arrow className="fill-gray-900" />
                        </Tooltip.Content>
                      </Tooltip.Portal>
                    </Tooltip.Root>
                  );
                } else {
                  return (
                    <button
                      key={item.value}
                      onClick={() => handleOptionSelect(mainAttributeKey, item.value, item.variant)}
                      className={`
                        relative px-3 py-1.5 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500
                        ${selectedOptions[mainAttributeKey] === item.value ? 'ring-2 ring-indigo-500' : 'ring-1 ring-gray-200'}
                        flex items-center justify-center text-sm font-medium rounded-md hover:bg-gray-100
                        min-w-[70px] text-gray-900
                      `}
                    >
                      {item.value}
                      {selectedOptions[mainAttributeKey] === item.value && (
                        <div className="absolute -top-0.5 -right-0.5 bg-indigo-500 rounded-full p-0.5">
                          <Check className="h-2 w-2 text-white" />
                        </div>
                      )}
                    </button>
                  );
                }
              })}
            </div>
          </div>
        )}

        {/* Required attribute selectors */}
        {Object.entries(attributeConfig).map(([key, config]) => {
          if (key === mainAttributeKey) return null; // Skip main attribute as it's already shown

          const attributeValues = getAttributeValues(key);
          const showAttribute = hasAttribute(key) && attributeValues.length > 0;
          const isRequired = requiredAttributes.includes(key);

          if (!showAttribute) return null;

          return (
            <div key={key}>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">{config.display}</h3>
                {isRequired && !selectedOptions[key] && showRequiredHints && (
                  <span className="text-sm text-blue-500">Erforderlich</span>
                )}
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {attributeValues.map((item) => {
                  if ('hex' in item) {
                    return (
                      <Tooltip.Root key={`${key}-${item.value}`}>
                        <Tooltip.Trigger asChild>
                          <button
                            onClick={() => handleOptionSelect(key, item.value, item.variant)}
                            className={`
                              relative w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500
                              ${selectedOptions[key] === item.value ? 'ring-2 ring-indigo-500' : 'ring-1 ring-gray-200'}
                            `}
                          >
                            <div
                              className="w-full h-full rounded-full"
                              style={{ backgroundColor: item.hex }}
                            />
                            {selectedOptions[key] === item.value && (
                              <div className="absolute -top-0.5 -right-0.5 bg-indigo-500 rounded-full p-0.5">
                                <Check className="h-2 w-2 text-white" />
                              </div>
                            )}
                          </button>
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                          <Tooltip.Content
                            className="bg-gray-900 text-white px-2 py-1 rounded text-sm"
                            sideOffset={5}
                          >
                            {item.value}
                            <Tooltip.Arrow className="fill-gray-900" />
                          </Tooltip.Content>
                        </Tooltip.Portal>
                      </Tooltip.Root>
                    );
                  } else {
                    return (
                      <button
                        key={`${key}-${item.value}`}
                        onClick={() => handleOptionSelect(key, item.value, item.variant)}
                        className={`
                          relative px-3 py-1.5 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500
                          ${selectedOptions[key] === item.value ? 'ring-2 ring-indigo-500' : 'ring-1 ring-gray-200'}
                          flex items-center justify-center text-sm font-medium rounded-md hover:bg-gray-100
                          min-w-[70px] text-gray-900
                        `}
                      >
                        {item.value}
                        {selectedOptions[key] === item.value && (
                          <div className="absolute -top-0.5 -right-0.5 bg-indigo-500 rounded-full p-0.5">
                            <Check className="h-2 w-2 text-white" />
                          </div>
                        )}
                      </button>
                    );
                  }
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Tooltip.Provider>
  );
}
