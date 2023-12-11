export default function ProductDetail({ params }: { params: { slug: string } }) {
  return <div>Product: {params.slug}</div>
}