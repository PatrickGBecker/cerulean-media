import { PageInfo } from '../typings';

export const fetchPageInfo = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
    );
    // check res for error
    if (!res.ok) {
      console.log(res.statusText);
    }

    const data = await res.json();
    const pageInfo: PageInfo[] = data.pageInfo;

    return pageInfo;
  } catch (err) {
    console.log({ err });
    return [];
  }
};
