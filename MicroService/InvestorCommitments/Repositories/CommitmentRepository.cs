using InvestorCommitments.Data;
using InvestorCommitments.DTO;
using InvestorCommitments.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace InvestorCommitments.Repositories
{
    public class CommitmentRepository : ICommitmentRepository
    {
        private readonly DataContext _context;
        public CommitmentRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<List<CommitmentResponse>> GetCommitments(int investorId, string? assetClass)
        {
            try
            {
                var query = _context.Commitments.Where(x => x.investorId == investorId);

                if (assetClass is not null && !string.IsNullOrEmpty(assetClass))
                {
                    query = query.Where(x => x.assetClass.ToLower() == assetClass.ToLower());
                }

                var commitments = await query.Select(
                    x => new CommitmentResponse
                    {
                        id = x.id,
                        assetClass = x.assetClass,
                        amount = x.amount,
                        currency = x.currency
                    }).ToListAsync();

                return commitments;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return new List<CommitmentResponse>();
            }
        }

        public async Task<List<AssetClassResponse>> GetAssetClasses(int investorId)
        {
            try
            {
                var assetClasses = await _context.Commitments.Where(x => x.investorId == investorId)
                    .GroupBy(x => x.assetClass)
                    .Select(y => new AssetClassResponse
                    {
                        assetType = y.Key,
                        totalAmount = y.Sum(c => c.amount)
                    })
                    .ToListAsync();


                return assetClasses;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex); 
                return new List<AssetClassResponse>();
            }
        }
    }
}
