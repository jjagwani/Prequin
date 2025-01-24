using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace InvestorCommitments.Entities
{
    public class Investor
    {
        public int id { get; set; }
        [Column("investor_name")]
        public string name { get; set; }
        [Column("investor_type")]
        public string type { get; set; }
        public string country { get; set; }
        [Column("date_added")]
        public string dateAdded { get; set; }
        public List<Commitment> Commitments { get; set; }
        [NotMapped]
        public long totalCommitment
        {
            get
            {
                return Commitments?.Sum(c => c.amount) ?? 0;
            }
        }
    }
}
