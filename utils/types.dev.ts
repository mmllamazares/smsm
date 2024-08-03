import { LatLngExpression } from "leaflet"

export interface PropsMap {
  position: LatLngExpression
  zoom: number
}

// Format 22.51512N,-84.515313W
type Location = `${number}N,${number}W`

// Format dd/mm/yyyy hh:mm am/pm
type DateDetection =
  `${number}/${number}/${number} ${number}:${string} ${string}`

export type FailDetected = {
  id: string
  name: string
  location: Location
  cause: string
  dateDetection: DateDetection
  priority: string
}

export interface PropsDetailsFail {
  fail: FailDetected
}

// Prop del tipo de notificacion
export type PropsNotificationCard = {
  type: "success" | "error" | "warning" | "info"
  description?: string
};
