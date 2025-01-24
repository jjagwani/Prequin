using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace InvestorCommitments.Entities
{
    public class Commitment
    {
        public int id { get; set; }
        [Column("investor_id")]
        public int investorId { get; set; }
        [Column("last_updated")]
        public string lastUpdated { get; set; }
        [Column("asset_class")]
        public string assetClass { get; set; }
        public long amount { get; set; }
        public string currency { get; set; }
        public Investor Investor { get; set; }
    }
}
