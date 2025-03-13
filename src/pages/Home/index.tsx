import { SimpleGrid, Group, Card, Text } from "@mantine/core";
import { Product } from "../../models";
import classes from "./index.module.css";
import { useProducts } from "./useProducts";

export function ProductCard(product: Product) {
  return (
    <Card withBorder padding="lg" className={classes.card}>
      <Group justify="space-between">
        <Text fz="sm" fw={700} className={classes.title}>
          {product.title}
        </Text>
      </Group>
      <Text mt="sm" mb="md" c="dimmed" fz="xs">
        {product.description}
      </Text>
      <Card.Section>
        <div className={classes.footer}>
          <div>
            <Text size="xs" color="dimmed">
              price
            </Text>
            <Text fw={500} size="sm">
              {product.price}
            </Text>
          </div>
          <div>
            <Text size="xs" color="dimmed">
              ratings
            </Text>
            <Text fw={500} size="sm">
              {product.rating}
            </Text>
          </div>
        </div>
      </Card.Section>
    </Card>
  );
}

export const Home = () => {
  const { data } = useProducts();

  return (
    <SimpleGrid cols={5} m={"lg"}>
      {data?.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </SimpleGrid>
  );
};
