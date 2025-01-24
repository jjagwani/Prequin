using InvestorCommitments.DTO;

namespace InvestorCommitments.Repositories.Interfaces
{
    public interface IInvestorRepository
    {
        Task<List<InvestorResponse>> GetInvestors(int? id = null);
    }
}
