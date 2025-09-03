export const FilterBar = ({setFilterType, setSearchTerm}) => {
  return (
    <div className="filter-bar">
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
    </div>
  );
};
