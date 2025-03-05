export class CreateDealDto {
    id: string
    title: string
    description: string
    price: number
    startingAt: Date
    endingAt: Date
    isPublished: boolean
    tags: string[]
    userId: string   

}
