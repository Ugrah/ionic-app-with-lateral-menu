import {EmptyWithSubCategory} from "../pages/empty-with-sub-category/empty-with-sub-category";

interface PageModel {
  title: string;
  pageName: any;
  icon?: string;
  imgPath?: string;
}

export const MenuListPages: PageModel[] = [
  //Add the page witch will be in the menu
  {
    title: "Page Title",
    pageName: EmptyWithSubCategory,
    icon: "ion-icon-name",
    imgPath: "imagePath.jpg"
  }
];

export const HomeListLinks: PageModel[] = MenuListPages;

