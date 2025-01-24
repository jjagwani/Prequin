using InvestorCommitments.DTO;

namespace InvestorCommitments.Repositories.Interfaces
{
    public interface ICommitmentRepository
    {
        Task<List<CommitmentResponse>> GetCommitments(int investorId, string? assetClass);
        Task<List<AssetClassResponse>> GetAssetClasses(int investorId);
    }
}
