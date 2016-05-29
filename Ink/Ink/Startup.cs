using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Ink.Startup))]
namespace Ink
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
