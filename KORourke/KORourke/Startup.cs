using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(KORourke.Startup))]
namespace KORourke
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
