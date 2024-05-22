export const sampleChats = [
  {
    avatar: ["https://picsum.photos/seed/picsum/200/300"],
    name: "suru abhisekh",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: [
      "https://picsum.photos/seed/picsum/200/300",
      "https://picsum.photos/200/300?grayscale",
    ],
    name: "abhisekh suru",
    _id: "2",
    groupChat: false,
    members: ["2"],
  },
];

export const sampleUsers = [
  {
    _id: "1",
    name: "John Doe",
    avatar: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    _id: "2",
    name: "Jane Smith",
    avatar: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    _id: "3",
    name: "Michael Johnson",
    avatar: "https://example.com/avatar3.jpg",
  },
  {
    _id: "4",
    name: "Emily Davis",
    avatar: "https://example.com/avatar4.jpg",
  },
  {
    _id: "5",
    name: "Chris Wilson",
    avatar: "https://example.com/avatar5.jpg",
  },
];

export const sampleNotifications = [
  {
    _id: "1",
    sender: {
      name: "John Doe",
      avatar: "https://picsum.photos/seed/picsum/200/300",
    },
  },
  {
    _id: "2",
    sender: {
      name: "Jane Smith",
      avatar: "https://picsum.photos/seed/picsum/200/300",
    },
  },
];

export const sampleMessage = [
  {
    attachments: [
      {
        public_id: "attachment3_public_id",
        url: "UsersAbhisekhDownloadssample-boat-400x300.png",
      },
    ],
    content: "This is the second message content.",
    _id: "message_id_2",
    sender: {
      _id: "sender_id_2",
      name: "luthufulla",
    },
    chat: "chat_id_1",
    createdAt: "2024-03-21T12:05:00Z",
  },
  {
    attachments: [
      {
        public_id: "attachment1_public_id",
        url: "C:UsersAbhisekhDownloadssample-boat-400x300.png",
      },
    ],
    content: "This is the first message content.",
    _id: "message_id_1",
    sender: {
      _id: "sddsddsf",
      name: "Sender Name 1",
    },
    chat: "chat_id_1",
    createdAt: "2024-03-21T10:15:00Z",
  },
  {
    attachments: [
      {
        public_id: "attachment2_public_id",
        url: "C:UsersAbhisekhDownloadssample-boat-400x300.png",
      },
    ],
    content: "This is the second message content.",
    _id: "message_id_2",
    sender: {
      _id: "sender_id_2",
      name: "madhav",
    },
    chat: "chat_id_1",
    createdAt: "2024-03-21T12:05:00Z",
  },
  {
    attachments: [
      {
        public_id: "attachment2_public_id",
        url: "https://example.com/attachment2",
      },
    ],
    content: "This is the second message content.",
    _id: "message_id_2",
    sender: {
      _id: "sender_id_2",
      name: "pavan kumar",
    },
    chat: "chat_id_1",
    createdAt: "2024-03-21T12:05:00Z",
  },
];

export const dashboardData = {
  users: [
    {
      name: "John Doe",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "1",
      username: "john_doe",
      friends: 20,
      groups: 5,
    },
    {
      name: "John Boi",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "2",
      username: "john_boi",
      friends: 20,
      groups: 25,
    },
  ],

  chats: [
    {
      name: "10th Group",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "3", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "4", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "John Doe",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
    {
      name: "Btech Group",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      groupChat: true,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "John Boi",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
  ],

  messages: [
    {
      attachments: [],
      content: "L*uda ka Message hai",
      _id: "sfnsdjkfsdnfkjsbnd",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Chaman ",
      },
      chat: "chatId",
      groupChat: false,
      createdAt: "2024-02-12T10:41:30.630Z",
    },

    {
      attachments: [
        {
          public_id: "asdsad 2",
          url: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      content: "",
      _id: "sfnsdjkfsdnfkdddjsbnd",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Chaman  2",
      },
      chat: "chatId",
      groupChat: true,
      createdAt: "2024-02-12T10:41:30.630Z",
    },
  ],
};
