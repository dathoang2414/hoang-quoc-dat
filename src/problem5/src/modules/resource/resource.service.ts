import { Prisma } from '@prisma/client';
import prisma from '../../configs/connectDb';
import { ResourceDTO } from '../../models/resource/resource.dto';
import CreateResourceDto from './dto/create.dto';
import SearchParamsDto from './dto/searchParams.dto';
import UpdateResourceDto from './dto/update.dto';

export class ResourceService {
  constructor() {}

  async getAllResources(params: SearchParamsDto): Promise<{
    total: number;
    limit: number;
    page: number;
    data: ResourceDTO[];
  }> {
    const { search, limit = 10, page = 1, orderDir, orderBy } = params;
    const findManyOptions: Prisma.ResourceFindManyArgs = {
      where: {
        name: {
          contains: search,
        },
      },
      take: parseInt(`${limit}`),
      skip: parseInt(`${limit * (page - 1)}`),
      ...(orderBy &&
        orderDir && {
          orderBy: {
            [orderBy]: orderDir,
          },
        }),
    };
    const resources = await prisma.resource.findMany(findManyOptions);
    const TotalResources = await prisma.resource.count({
      where: findManyOptions.where,
    });
    return {
      total: TotalResources,
      limit: parseInt(`${limit}`),
      page: parseInt(`${page}`),
      data: resources as ResourceDTO[],
    };
  }

  async createResource(
    data: CreateResourceDto
  ): Promise<{ status: number; message: string }> {
    const resource = await prisma.resource.create({
      data,
    });
    console.log('resource', resource);
    return { message: 'Create a new resource success!', status: 201 };
  }

  async getResourceById(id: string): Promise<ResourceDTO> {
    const resource = await prisma.resource.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    return resource as ResourceDTO;
  }

  async updateResource(
    id: string,
    data: UpdateResourceDto
  ): Promise<ResourceDTO> {
    const resource = await prisma.resource.update({
      where: {
        id: parseInt(id),
      },
      data,
    });
    return resource as ResourceDTO;
  }

  async deleteResource(id: string): Promise<ResourceDTO> {
    const resource = await prisma.resource.delete({
      where: {
        id: parseInt(id),
      },
    });
    return resource as ResourceDTO;
  }
}
