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
        url: "https://example.com/attachment3",
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
        url: "https://example.com/attachment1",
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
        url: "https://example.com/attachment2",
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
