export default interface messageInterface {
  id: string;
  title: string;
  content: string;
  interest_count: number;
  attachments: [
    {
      id: string;
      name: string;
      created_at: string;
      size: number;
      mime_type: string;
      url: string;
      resource_type: string;
    }
  ];
}
