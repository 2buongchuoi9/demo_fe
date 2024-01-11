import { routerString as router } from "../constan"
import AllStudent from "../layout/AdminLayout/AllStudent"
import TestExcel from "../layout/AdminLayout/TestExcel"

import Home from "../pages/Home"
import Product from "../pages/Product"

export const publicRoutes = [
    { path: router.home, component: Home },
    { path: router.products, component: Product },
    { path: router.student, component: AllStudent },
    { path: "/send-excel", component: TestExcel },
]

// const admin = router.admin

// export const privateRoutes = [
//     { path: admin.home, component: AdHome },
//     { path: admin.news.all, component: AllNews },
//     { path: admin.news.add, component: (props) => <NewsDetail {...props} add={true} /> },
//     { path: admin.news.detail, component: NewsDetail },
//     { path: admin.newsCategory, component: AdHome },
//     { path: admin.products.all, component: AllProduct },
//     { path: admin.products.add, component: (props) => <ProductDetail {...props} add={true} /> },
//     { path: admin.products.detail, component: ProductDetail },

//     { path: admin.promotion.all, component: AllPromorion },
//     { path: admin.promotion.detail, component: AdPromotionDetail },
//     { path: admin.promotion.add, component: (props) => <AdPromotionDetail {...props} add={true} /> },

//     { path: admin.category, component: AdHome },
//     { path: admin.brands, component: AdHome },
//     { path: admin.media.all, component: AllMedia },
//     { path: admin.media.add, component: AddMedia },
//     { path: admin.pages, component: AdHome },

//     { path: admin.sales.all, component: AllSale },
//     { path: admin.sales.add, component: (props) => <AdSaleDetail {...props} add={true} /> },
//     { path: admin.sales.detail, component: <AdSaleDetail /> },

//     { path: admin.users, component: AdHome },
//     { path: admin.infos, component: AdHome },
//     { path: admin.setting, component: AdHome },
//     { path: admin.profile, component: AdHome },
// ]
