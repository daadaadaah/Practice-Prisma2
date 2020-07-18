import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
  // Create
  // await prisma.user.create({
  //   data: {
  //     name: "Alice2",
  //     email: "alice@prisma.io2",
  //     posts: {
  //       create: { title: "Hello World" },
  //     },
  //     profile: {
  //       create: { bio:  "I like turtles" }
  //     }
  //   }
  // })

  // Read
  // const allUsers = await prisma.user.findMany()
  // console.log(allUsers)

  // Update
  // const post = await prisma.user.update({
  //   where: { email : "alice@prisma.io2" },
  //   data: { name: "Alice4", },
  // })
  // console.log(post)

  // Delete
  // const post = await prisma.user.delete({
  //   where: { email : "alice@prisma.io" },
  // })
  // console.log(post)

}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.disconnect()
  })