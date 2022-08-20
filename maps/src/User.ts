import { faker } from "@faker-js/faker"
import { Mappable } from "./CustomMap"

export class User implements Mappable {
  name: string
  location: {
    lat: number
    lng: number
  }

  constructor() {
    this.name = faker.name.firstName()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }

  markerText(): string {
    return `
    <h4>${this.name}</h4>
    <h5>Home</h5>
    `
  }
}
