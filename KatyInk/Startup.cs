using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(KatyInk.Startup))]
namespace KatyInk
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
