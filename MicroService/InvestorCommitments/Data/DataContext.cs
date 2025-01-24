using InvestorCommitments.Entities;
using Microsoft.EntityFrameworkCore;

namespace InvestorCommitments.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }

        public DbSet<Investor> Investors  { get; set; }

        public DbSet<Commitment> Commitments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Commitment>()
                .HasOne(c => c.Investor)
                .WithMany(i => i.Commitments)
                .HasForeignKey(c => c.investorId);

            base.OnModelCreating(modelBuilder);
        }
    }
}
