import { ListTypeofServiceResponse } from "../useCase/listTypeOfService/ListTypeOfServiceDtos";

export abstract class ComplementaryDataMapper {
    public static toListTypeofServiceResponse(data: any[]): ListTypeofServiceResponse[] {
        return data.map(item => ({
            id: item.id,
            description: item.description
        }));
    }
}