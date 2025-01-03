import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  item: {
    id: number;
    title: string;
    price: number;
    description: string;
    images?: string;
  };
}

export default function ProductCard({ item }: ProductCardProps) {
  return (
    <Card className="shadow-md rounded-lg w-full max-w-xs mx-auto overflow-hidden">
      <CardHeader>
        <img
          src={item.images[0]}
          alt={item.title}
          className="w-full h-64 object-cover object-center"
        />
      </CardHeader>

      <CardContent className="p-4">
        <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
        <CardDescription className="text-lg text-gray-700 mb-4">
          ${item.price.toFixed(2)}
        </CardDescription>

        <div className="flex justify-between">
          {/* <Link href={`/product/${item.id}`}>
            <Button
              variant="default"
              className="bg-blue-600 text-white hover:bg-blue-500 w-full"
            >
              View Details
            </Button>
          </Link> */}

          <Button
            variant="outline"
            className="bg-primary-600 hover:bg-secondary hover:text-primary"
          >
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
