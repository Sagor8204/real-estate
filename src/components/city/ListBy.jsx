export default function ListBy() {
  return (
    <div>
      {/* List By Categories */}
      <div className="mb-8 bg-white rounded-md py-9 px-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          List by Categories
        </h2>

        <ul>
          <li className="flex items-center justify-between text-[13px] py-[10px] text-black border-b">
            Apartments <span className="text-gray-500 text-xs">(17)</span>
          </li>
          <li className="flex items-center justify-between text-[13px] py-[10px] text-black border-b">
            Condos <span className="text-gray-500 text-xs">(17)</span>
          </li>
          <li className="flex items-center justify-between text-[13px] py-[10px] text-black border-b">
            Houses <span className="text-gray-500 text-xs">(17)</span>
          </li>
          <li className="flex items-center justify-between text-[13px] py-[10px] text-black border-b">
            Industrial <span className="text-gray-500 text-xs">(17)</span>
          </li>
          <li className="flex items-center justify-between text-[13px] py-[10px] text-black border-b">
            Land <span className="text-gray-500 text-xs">(17)</span>
          </li>
          <li className="flex items-center justify-between text-[13px] py-[10px] text-black border-b">
            Offices <span className="text-gray-500 text-xs">(17)</span>
          </li>
          <li className="flex items-center justify-between text-[13px] py-[10px] text-black border-b">
            Retail <span className="text-gray-500 text-xs">(17)</span>
          </li>
          <li className="flex items-center justify-between text-[13px] py-[10px] text-black border-b">
            Villas <span className="text-gray-500 text-xs">(17)</span>
          </li>
        </ul>
      </div>

      {/* List By Types */}
      <div className="mb-8 bg-white rounded-md py-9 px-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          List by Types
        </h2>

        <ul>
          <li className="flex items-center justify-between text-[13px] py-[10px] text-black border-b">
            Sales <span className="text-gray-500 text-xs">(20)</span>
          </li>
          <li className="flex items-center justify-between text-[13px] py-[10px] text-black border-b">
            Rentals <span className="text-gray-500 text-xs">(18)</span>
          </li>
          <li className="flex items-center justify-between text-[13px] py-[10px] text-black border-b">
            Invest <span className="text-gray-500 text-xs">(4)</span>
          </li>
        </ul>
      </div>

      {/* List By Cites */}
      <div className="mb-8 bg-white rounded-md py-9 px-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          List by Cites
        </h2>

        <ul>
          <li className="flex items-center justify-between text-[13px] py-[10px] text-black border-b">
            Jersey City <span className="text-gray-500 text-xs">(25)</span>
          </li>
          <li className="flex items-center justify-between text-[13px] py-[10px] text-black border-b">
            New York <span className="text-gray-500 text-xs">(17)</span>
          </li>
        </ul>
      </div>

      {/* List By Areas */}
      <div className="mb-8 bg-white rounded-md py-9 px-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          List by Areas
        </h2>

        <ul>
          <li className="flex items-center justify-between text-[13px] py-[10px] text-black border-b">
            Bayonne <span className="text-gray-500 text-xs">(5)</span>
          </li>
          <li className="flex items-center justify-between text-[13px] py-[10px] text-black border-b">
            Greenville <span className="text-gray-500 text-xs">(17)</span>
          </li>
          <li className="flex items-center justify-between text-[13px] py-[10px] text-black border-b">
            Manhattan <span className="text-gray-500 text-xs">(8)</span>
          </li>
          <li className="flex items-center justify-between text-[13px] py-[10px] text-black border-b">
            Queens <span className="text-gray-500 text-xs">(4)</span>
          </li>
          <li className="flex items-center justify-between text-[13px] py-[10px] text-black border-b">
            The Heights <span className="text-gray-500 text-xs">(3)</span>
          </li>
          <li className="flex items-center justify-between text-[13px] py-[10px] text-black border-b">
            Upper East Side <span className="text-gray-500 text-xs">(3)</span>
          </li>
          <li className="flex items-center justify-between text-[13px] py-[10px] text-black border-b">
            West Side <span className="text-gray-500 text-xs">(1)</span>
          </li>
          <li className="flex items-center justify-between text-[13px] py-[10px] text-black border-b">
            West Village <span className="text-gray-500 text-xs">(1)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
