using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace VueApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ServicesController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<ServiceDto>> Get()
        {
            return new ServiceDto[] {
                new ServiceDto() {
                    Name ="Development",
                    Uri="https://readify.net/services/development/",
                    IconUri="https://readify.net/media/1187/development.png"
                },
                new ServiceDto() {
                    Name ="Innovation and Design",
                    Uri="https://readify.net/services/innovation-design/",
                    IconUri="https://readify.net/media/1189/light-bulb.png"
                },
                new ServiceDto() {
                    Name ="Data and Analytics",
                    Uri="https://readify.net/services/data-analytics/",
                    IconUri="https://readify.net/media/1184/data.png"
                },
                new ServiceDto() {
                    Name ="DevOps",
                    Uri="https://readify.net/services/devops/",
                    IconUri="https://readify.net/media/1188/devops.png"
                },
            };
        }
    }

    public class ServiceDto
    {
        public string Name { get; set; }
        public string Uri { get; set; }
        public string IconUri { get; set; }
    }
}