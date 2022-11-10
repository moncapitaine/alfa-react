import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await selectUsers()
  await selectPosts()
  await selectUsersWithPosts()
}

const selectUsers = async () => {
  const users = await prisma.user.findMany()
  console.log(users)
}

const selectUsersWithPosts = async () => {
  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true
    }
  })
  console.log(JSON.stringify(usersWithPosts, null, 2))
}

const selectPosts = async () => {
  const posts = await prisma.post.findMany()
  console.log(posts)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })