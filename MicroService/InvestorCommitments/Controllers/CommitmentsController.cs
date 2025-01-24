using InvestorCommitments.Data;
using InvestorCommitments.DTO;
using InvestorCommitments.Entities;
using InvestorCommitments.Queries;
using InvestorCommitments.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace InvestorCommitments.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommitmentsController : ControllerBase
    {
        private readonly ICommitmentRepository _commitmentRepository;

        public CommitmentsController(ICommitmentRepository commitmentRepository)
        {
            _commitmentRepository = commitmentRepository;
        }

        [HttpGet("{investorId:int}/details")]
        public async Task<ActionResult<List<CommitmentResponse>>> GetCommitments(int investorId, [FromQuery] CommitmentParams? commitmentParams)
        {
            var commitments = await _commitmentRepository.GetCommitments(investorId, commitmentParams?.assetClass);

            if (commitments.Count == 0)
            {
                return NotFound("No commitments found");
            }

            return Ok(commitments);
        }

        [HttpGet("{investorId:int}/assets")]
        public async Task<ActionResult<List<AssetClassResponse>>> GetAssetClassesFromCommitments(int investorId)
        {
            var assetClasses = await _commitmentRepository.GetAssetClasses(investorId);

            if (assetClasses.Count == 0)
            {
                return NotFound("No assets found");
            }

            return Ok(assetClasses);
        }
    }
}
