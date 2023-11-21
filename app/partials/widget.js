export default function Widget(){
  return (
    <>
      {/* Widgets */}
      <div className="five columns">
        {/* Sort by */}
        <div className="widget">
          <h4>Sort by</h4>
          {/* Select */}
          <select
            data-placeholder="Choose Category"
            className="chosen-select-no-single"
          >
            <option value="recent">
              Newest
            </option>
            <option value="oldest">Oldest</option>
            <option value="expiry">Expiring Soon</option>
            <option value="ratehigh">Hourly Rate – Highest First</option>
            <option value="ratelow">Hourly Rate – Lowest First</option>
          </select>
        </div>
        {/* Location */}
        <div className="widget">
          <h4>Location</h4>
          <form action="#" method="get">
            <input type="text" placeholder="State / Province" defaultValue="" />
            <input type="text" placeholder="City" defaultValue="" />
            <input
              type="text"
              className="miles"
              placeholder="Miles"
              defaultValue=""
            />
            <label htmlFor="zip-code" className="from">
              from
            </label>
            <input
              type="text"
              id="zip-code"
              className="zip-code"
              placeholder="Zip-Code"
              defaultValue=""
            />
            <br />
            <button className="button">Filter</button>
          </form>
        </div>
      </div>
      {/* Widgets / End */}
    </>
  );
}