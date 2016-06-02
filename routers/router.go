package routers

import (
	"cisiondata/controllers"

	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/", &controllers.MainController{})

	// 关于
	beego.Router("/about-us", &controllers.AboutUsController{})

	beego.Router("/news", &controllers.NewsController{})
	beego.Router("/products", &controllers.ProductsController{})
	beego.Router("/service", &controllers.ServiceController{})
	beego.Router("/technology", &controllers.TechnologyController{})
	beego.Router("/invite", &controllers.InviteController{})
	beego.Router("/contact", &controllers.ContactController{})

}
