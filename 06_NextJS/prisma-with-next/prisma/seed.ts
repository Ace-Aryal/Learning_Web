import { PrismaClient, Post, User } from "@/generated/prisma";

const prisma = new PrismaClient();

const initialPosts: Post[] = [
  {
    id: "1",
    content: "First post content",
    title: "Post 1",
    slug: "post-1",
    authorId: "1",
    publishedAt: new Date("2020-02-02"),
    updatedAt: new Date("2020-02-02"),
    Published: true,
  },
  {
    id: "2",
    content: "Second post content",
    title: "Post 2",
    slug: "post-2",
    authorId: "2",
    publishedAt: new Date("2020-03-02"),
    updatedAt: new Date("2020-03-02"),
    Published: false,
  },
  {
    id: "3",
    content: "Third post content",
    title: "Post 3",
    slug: "post-3",
    authorId: "3",
    publishedAt: new Date("2020-04-02"),
    updatedAt: new Date("2020-04-02"),
    Published: true,
  },
  {
    id: "4",
    content: "Fourth post content",
    title: "Post 4",
    slug: "post-4",
    authorId: "1",
    publishedAt: new Date("2020-05-02"),
    updatedAt: new Date("2020-05-02"),
    Published: false,
  },
  {
    id: "5",
    content: "Fifth post content",
    title: "Post 5",
    slug: "post-5",
    authorId: "2",
    publishedAt: new Date("2020-06-02"),
    updatedAt: new Date("2020-06-02"),
    Published: true,
  },
];

const initialUsers: User[] = [
  {
    id: "1",
    email: "johndoe1@gmail.com",
    hashedPassword: "hashedPassword1",
  },
  {
    id: "2",
    email: "janedoe2@gmail.com",
    hashedPassword: "hashedPassword2",
  },
  {
    id: "3",
    email: "alexsmith3@gmail.com",
    hashedPassword: "hashedPassword3",
  },
  {
    id: "4",
    email: "maryjones4@gmail.com",
    hashedPassword: "hashedPassword4",
  },
  {
    id: "5",
    email: "michaelbrown5@gmail.com",
    hashedPassword: "hashedPassword5",
  },
];

async function main() {
  console.log("start seeding ...");
  for (const user of initialUsers) {
    await prisma.user.upsert({
      where: {
        email: user.email,
      },
      update: {},
      create: user,
    });
    console.log(`created user with email ${user.email}`);
  }

  // Then create posts, now authorId foreign keys will work
  for (const post of initialPosts) {
    await prisma.post.upsert({
      where: {
        id: post.id,
      },
      update: {},
      create: post,
    });
    console.log(`created post titled ${post.title}`);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
