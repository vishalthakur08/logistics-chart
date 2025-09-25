import ShippingChart from "../charts/ShippingChart";

export default function ShippingRoute() {
  return (
    <div style={{
      width: 280, height: 228, padding: 8,
      background: "transparent", margin: "0 auto"
    }}>
       <h1>✅ ShippingRoute is working</h1>
      <ShippingChart width={280} height={228} />
    </div>

    
  );
}

