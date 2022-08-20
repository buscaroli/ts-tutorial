export interface Mappable {
  location: {
    lat: number
    lng: number
  }
  markerText(): string
  color?: string
}

export class CustomMap {
  private googleMap: google.maps.Map

  constructor(element: string) {
    this.googleMap = new google.maps.Map(
      document.querySelector(`${element}`)!,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    )
  }

  addMarker(entity: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: entity.location.lat,
        lng: entity.location.lng,
      },
    })

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: entity.markerText(),
      })
      infoWindow.open(this.googleMap, marker)
    })
  }
}
