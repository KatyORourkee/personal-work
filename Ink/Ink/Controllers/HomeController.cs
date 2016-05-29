using System.Web.Mvc;

namespace Ink.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Calculator()
        {
            return View();
        }
    }
}