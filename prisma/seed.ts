import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  for (let i = 1; i <= 5; i++) {
    const user = await prisma.user.create({
      data: {
        name: `User${i}`,
        email: 'user' + i + '@prisma.io',
        posts: {
          create: [
            {
              title: `Post ${i}-1`,
              content: `This is the body of post ${i}-1`,
            },
            {
              title: `Post ${i}-2`,
              content: `This is the body of post ${i}-2`,
            },
            {
              title: `Post ${i}-3`,
              content: `This is the body of post ${i}-3`,
            },
            {
              title: `Post ${i}-4`,
              content: `This is the body of post ${i}-4`,
            },
            {
              title: `Post ${i}-5`,
              content: `This is the body of post ${i}-5`,
            },
          ],
        },
      },
    })
    console.log(`Created user: ${user.name}`)
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => {
    prisma.$disconnect()
  })
