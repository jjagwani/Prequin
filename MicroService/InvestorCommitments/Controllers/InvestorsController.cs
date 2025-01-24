using InvestorCommitments.Data;
using InvestorCommitments.DTO;
using InvestorCommitments.Entities;
using InvestorCommitments.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace InvestorCommitments.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvestorsController : ControllerBase
    {
        private readonly IInvestorRepository _investorRepository;

        public InvestorsController(IInvestorRepository investorRepository)
        {
            _investorRepository = investorRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<InvestorResponse>>> GetAllInvestors()
        {
            var investors = await _investorRepository.GetInvestors();

            if (investors.Count == 0)
            {
                return NotFound("No investors found");
            }


            return Ok(investors);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<List<InvestorResponse>>> GetInvestorById(int id)
        {
            var investors = await _investorRepository.GetInvestors(id);

            if (investors.Count == 0)
            {
                return NotFound("No investor found");
            }


            return Ok(investors);
        }
    }
}
