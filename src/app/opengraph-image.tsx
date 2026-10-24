import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = "DentaLux Clínica Dental en Tingo María";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #111111 0%, #1d1d1d 62%, #7e6525 100%)",
          color: "white",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "980px" }}>
          <div style={{ color: "#f0e17a", display: "flex", fontSize: 28, letterSpacing: 6 }}>
            TINGO MARÍA · HUÁNUCO
          </div>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 800, marginTop: 28 }}>
            {siteConfig.name}
          </div>
          <div style={{ color: "#e7e3d7", display: "flex", fontSize: 34, marginTop: 24 }}>
            Reserva tu cita mediante el canal oficial.
          </div>
          <div style={{ display: "flex", fontSize: 25, marginTop: 52 }}>
            {siteConfig.address.full}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
