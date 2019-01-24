import {EmptyWithSubCategory} from "../pages/empty-with-sub-category/empty-with-sub-category";

interface Icon {
  name: string,
  color: string
}

export interface PageModel {
  title: string;
  shortTitle: string;
  component: any;
  icon?: Icon;
  imgPath?: string;
}

export const MenuListPages: PageModel[] = [
  //Add the page witch will be in the menu
  {
    title: "Page Title",
    shortTitle: "Very Short",
    component: EmptyWithSubCategory,
    icon: {
      name: "list-box",
      color: "primary"
    },
    imgPath: "imagePath.jpg"
  },
  {
    title: "Page Title",
    shortTitle: "Very Short",
    component: EmptyWithSubCategory,
    icon: {
      name: "list-box",
      color: "secondary"
    },
    imgPath: "imagePath.jpg"
  }
];

export const HomeListPages: PageModel[] = MenuListPages;
