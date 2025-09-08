export const FilterBar = ({ setFilterType, setSearchTerm, currentUser }) => {
  return (
    <div className="filter-bar">
      {currentUser.isStaff ? (
        <>
          <button
            className="filter-btn btn-warning"
            onClick={() => {
              setFilterType("emergency");
            }}
          >
            Emergency
          </button>
          <button
            className="filter-btn btn-primary"
            onClick={() => {
              setFilterType("nonEmergency");
            }}
          >
            Non-Emergency
          </button>
          <button
            className="filter-btn btn-info"
            onClick={() => {
              setFilterType("all");
            }}
          >
            Show All
          </button>
          <input
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            type="text"
            placeholder="Search Tickets"
            className="ticket-search"
          />
        </>
      ) : (
        <>
          <button className="filter-btn btn-primary">Create Ticket</button>
          <button className="filter-btn btn-info" onClick={() => {
              setFilterType("openForUser");
            }}>Open Tickets</button>
          <button
            className="filter-btn btn-secondary"
            onClick={() => {
              setFilterType("all");
            }}
          >
            All My Tickets
          </button>
        </>
      )}
    </div>
  );
};
