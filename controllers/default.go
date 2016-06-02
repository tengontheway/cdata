package controllers

import (
	"github.com/astaxie/beego"
)

// 主页
type MainController struct {
	beego.Controller
}

func (c *MainController) Get() {
	c.Data["Website"] = "beego.me"
	c.Data["Email"] = "astaxie@gmail.com"
	c.TplName = "index.tpl"
}

// 关于
type AboutUsController struct {
	beego.Controller
}

func (c *AboutUsController) Get() {
	c.TplName = "about-us.tpl"
}

// 新闻中心
type NewsController struct {
	beego.Controller
}

func (c *NewsController) Get() {
	c.TplName = "news.tpl"
}

// 产品中心
type ProductsController struct {
	beego.Controller
}

func (c *ProductsController) Get() {
	c.TplName = "products.tpl"
}

// 服务中心
type ServiceController struct {
	beego.Controller
}

func (c *ServiceController) Get() {
	c.TplName = "service.tpl"
}

// 技术
type TechnologyController struct {
	beego.Controller
}

func (c *TechnologyController) Get() {
	c.TplName = "technology.tpl"
}

// 招贤纳士
type InviteController struct {
	beego.Controller
}

func (c *InviteController) Get() {
	c.TplName = "invite.tpl"
}

// 联系我们
type ContactController struct {
	beego.Controller
}

func (c *ContactController) Get() {
	c.TplName = "contact.tpl"
}
