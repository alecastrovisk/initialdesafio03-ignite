import { PrismaOrgsRepository } from '../../repositories/prisma/prisma-orgs-repsoitory'
import { OrgRegisterUseCase } from '../org-register'

export function makeRegisterUseCase() {
  const orgsRepository = new PrismaOrgsRepository()
  const registerOrgUseCase = new OrgRegisterUseCase(orgsRepository)

  return registerOrgUseCase
}
