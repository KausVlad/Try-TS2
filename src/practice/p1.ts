interface IInfo {
  desc: string;
  isActive: boolean;
}

interface ITags {
  name: string;
  value: number;
}

interface IMain {
  userId: number;
  id: number;
  title: string;
  info: IInfo;
  tags: ITags[];
}
