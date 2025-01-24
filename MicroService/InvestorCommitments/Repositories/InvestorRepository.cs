using InvestorCommitments.Data;
using InvestorCommitments.DTO;
using InvestorCommitments.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace InvestorCommitments.Repositories
{
    public class InvestorRepository : IInvestorRepository
    {
        private readonly DataContext _context;
        public InvestorRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<List<InvestorResponse>> GetInvestors(int? id = null)
        {
            try
            {
                IQueryable<Entities.Investor> query = _context.Investors;

                if (id is not null)
                {
                    query = query.Where(x => x.id == id);
                }

                var investors = await query.Select(i => new InvestorResponse
                {
                    id = i.id,
                    name = i.name,
                    type = i.type,
                    country = i.country,
                    dateAdded = i.dateAdded,
                    totalCommitment = i.Commitments.Sum(c => c.amount)
                })
                    .ToListAsync();


                return investors;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return new List<InvestorResponse>();
            }
        }
    }
}
