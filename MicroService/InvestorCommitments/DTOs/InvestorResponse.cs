namespace InvestorCommitments.DTO;
public class InvestorResponse
{
    public int id { get; set; }
    public string name { get; set; }
    public string type { get; set; }
    public string country { get; set; }
    public string dateAdded { get; set; }
    public long totalCommitment { get; set; }
}
