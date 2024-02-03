const { Client } = require("@notionhq/client")

const notion = new Client({ auth: process.env.NOTION_API_KEY })

// Initializing a client
const getUsers = async () => {
  const listUsersResponse = await notion.users.list({})
}


export async function getPosts() {
  const response = await notion.pages.create({
    parent: {
      database_id: "2f26ee68-df30-4251-aad4-8ddc420cba3d",
    },
    properties: {
      "Grocery item": {
        type: "title",
        title: [
          {
            type: "text",
            text: {
              content: "Tomatoes",
            },
          },
        ],
      },
      Price: {
        type: "number",
        number: 1.49,
      },
      "Last ordered": {
        type: "date",
        date: {
          start: "2021-05-11",
        },
      },
    },
  })
  console.log(response)
}
