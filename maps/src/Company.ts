import { faker } from "@faker-js/faker"
import { Mappable } from "./CustomMap"

export class Company implements Mappable {
  companyName: string
  catchPharase: string
  location: {
    lat: number
    lng: number
  }

  constructor() {
    this.companyName = faker.company.name()
    this.catchPharase = faker.company.catchPhrase()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }

  markerText(): string {
    return `
    <h4>${this.companyName}</h4>
    <h5>${this.catchPharase}</h5>
    `
  }
}
