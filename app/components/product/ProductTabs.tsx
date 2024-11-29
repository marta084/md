import * as Tabs from "@radix-ui/react-tabs";
import { Star } from "lucide-react";

interface Review {
  id: string;
  rating: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

interface ProductTabsProps {
  description: string;
  technicalDetails?: {
    [key: string]: string;
  };
  reviews?: Review[];
}

const MOCK_REVIEWS: Review[] = [
  {
    id: "1",
    rating: 5,
    title: "Amazing Sound Quality",
    content: "These headphones deliver incredible sound quality. The bass is deep and rich, while the highs are crystal clear. The noise cancellation is also top-notch.",
    author: "John D.",
    date: "2 months ago"
  },
  {
    id: "2",
    rating: 4,
    title: "Great Comfort",
    content: "Very comfortable for long listening sessions. The ear cups are soft and the headband has good padding. Battery life is also impressive.",
    author: "Sarah M.",
    date: "1 month ago"
  }
];

const MOCK_TECHNICAL_DETAILS = {
  "Driver Size": "40mm",
  "Frequency Response": "4Hz-40,000Hz",
  "Battery Life": "30 hours",
  "Charging Time": "3 hours",
  "Bluetooth Version": "5.0",
  "Weight": "254g",
  "Noise Cancellation": "Active Noise Cancellation (ANC)",
  "Water Resistance": "IPX4",
  "Microphone": "Built-in with noise suppression",
  "Controls": "Touch controls on ear cup"
};

export function ProductTabs({ description }: ProductTabsProps) {
  return (
    <Tabs.Root defaultValue="description" className="mt-16">
      <Tabs.List className="flex space-x-8 border-b border-gray-200" aria-label="Product Information">
        <Tabs.Trigger
          value="description"
          className="data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-6 text-sm font-medium"
        >
          Beschreibung
        </Tabs.Trigger>
        <Tabs.Trigger
          value="technical"
          className="data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-6 text-sm font-medium"
        >
          Technische Details
        </Tabs.Trigger>
        <Tabs.Trigger
          value="reviews"
          className="data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-6 text-sm font-medium"
        >
          Bewertungen
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="description" className="prose prose-sm max-w-none pt-10">
        <div className="space-y-6">
          {description.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </Tabs.Content>

      <Tabs.Content value="technical" className="pt-10">
        <dl className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
          {Object.entries(MOCK_TECHNICAL_DETAILS).map(([key, value]) => (
            <div key={key} className="border-b border-gray-200 pb-4">
              <dt className="text-sm font-medium text-gray-500">{key}</dt>
              <dd className="mt-1 text-sm text-gray-900">{value}</dd>
            </div>
          ))}
        </dl>
      </Tabs.Content>

      <Tabs.Content value="reviews" className="pt-10">
        <div className="flow-root">
          <div className="-my-12 divide-y divide-gray-200">
            {MOCK_REVIEWS.map((review) => (
              <div key={review.id} className="py-12">
                <div className="flex items-center">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{review.title}</h4>
                    <div className="mt-1 flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <Star
                          key={rating}
                          className={`h-4 w-4 ${
                            review.rating > rating ? 'text-yellow-400' : 'text-gray-200'
                          }`}
                          fill="currentColor"
                        />
                      ))}
                    </div>
                    <p className="sr-only">{review.rating} out of 5 stars</p>
                  </div>
                </div>

                <div className="mt-4 space-y-6 text-sm text-gray-600">
                  <p>{review.content}</p>
                </div>

                <div className="mt-4 flex items-center space-x-4 text-sm">
                  <div className="text-gray-500">
                    {review.author}
                  </div>
                  <div className="text-gray-500">·</div>
                  <div className="text-gray-500">
                    {review.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  );
}
