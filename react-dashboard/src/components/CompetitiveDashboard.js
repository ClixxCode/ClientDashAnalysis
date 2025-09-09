import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter, Cell, PieChart, Pie, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const CompetitiveDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Competitive data
  const competitors = [
    {
      name: 'Metro Retaining Walls',
      rating: 4.9,
      reviews: 26,
      years: 26,
      bbb: 'Not Accredited',
      warranty: 'Lifetime',
      expertise: 8.5,
      pricing: 7.5,
      services: ['Retaining Walls', 'Drainage', 'Engineering'],
      strengths: ['Engineering Expertise', 'Lifetime Warranty', 'NCMA Certified'],
      weaknesses: ['Customer Service', 'Limited Reviews', 'No BBB'],
      color: '#1B3A57'
    },
    {
      name: 'Big Bend Landscaping',
      rating: 4.9,
      reviews: 68,
      years: 30,
      bbb: 'A+',
      warranty: '1 Year',
      expertise: 8.0,
      pricing: 8.5,
      services: ['Full Landscaping', 'Retaining Walls', 'Patios', 'Lighting'],
      strengths: ['Market Leader', 'BBB A+', 'Awards'],
      weaknesses: ['Higher Pricing', 'No Lifetime Warranty'],
      color: '#708090'
    },
    {
      name: 'Tennant Landscape',
      rating: 4.8,
      reviews: 115,
      years: 25,
      bbb: 'Not Accredited',
      warranty: '1 Year',
      expertise: 6.5,
      pricing: 6.5,
      services: ['Full Service', 'Snow Removal', 'Synthetic Turf'],
      strengths: ['Most Reviews', '3D Design', 'Year-round Service'],
      weaknesses: ['No Engineering Focus', 'No BBB'],
      color: '#228B22'
    },
    {
      name: 'Meramec Hardscapes',
      rating: 5.0,
      reviews: 17,
      years: 5,
      bbb: 'Not Accredited',
      warranty: '1 Year',
      expertise: 6.0,
      pricing: 5.5,
      services: ['Hardscapes', 'Pools', 'Patios'],
      strengths: ['Perfect Rating', 'Growth Leader', 'Pool Integration'],
      weaknesses: ['Limited Experience', 'Small Scale'],
      color: '#FF8C00'
    },
    {
      name: 'Baker Landscaping',
      rating: 5.0,
      reviews: 25,
      years: 22,
      bbb: 'A+',
      warranty: '1 Year',
      expertise: 7.0,
      pricing: 6.0,
      services: ['Landscaping', 'Pools', 'Interior Renovation'],
      strengths: ['BBB A+', 'Integrated Services'],
      weaknesses: ['Quality Issues', 'Mixed Reviews'],
      color: '#800020'
    }
  ];

  const radarData = [
    { subject: 'Technical Expertise', MetroRetainingWalls: 8.5, BigBendLandscaping: 8.0, TennantLandscape: 6.5, fullMark: 10 },
    { subject: 'Online Reputation', MetroRetainingWalls: 6.0, BigBendLandscaping: 9.0, TennantLandscape: 8.5, fullMark: 10 },
    { subject: 'Service Breadth', MetroRetainingWalls: 4.0, BigBendLandscaping: 9.0, TennantLandscape: 9.5, fullMark: 10 },
    { subject: 'Market Position', MetroRetainingWalls: 6.5, BigBendLandscaping: 9.5, TennantLandscape: 7.5, fullMark: 10 },
    { subject: 'Customer Service', MetroRetainingWalls: 5.0, BigBendLandscaping: 8.5, TennantLandscape: 8.0, fullMark: 10 },
    { subject: 'Warranty Strength', MetroRetainingWalls: 10.0, BigBendLandscaping: 3.0, TennantLandscape: 3.0, fullMark: 10 }
  ];

  const positioningData = competitors.map(comp => ({
    name: comp.name,
    expertise: comp.expertise,
    pricing: comp.pricing,
    reviews: comp.reviews,
    color: comp.color
  }));

  const serviceMatrix = [
    { service: 'Retaining Walls', Metro: 'Expert', BigBend: 'Expert', Tennant: 'Standard', Meramec: 'Standard', Baker: 'Standard' },
    { service: 'Engineering', Metro: 'Expert', BigBend: 'Limited', Tennant: 'None', Meramec: 'None', Baker: 'None' },
    { service: 'Drainage', Metro: 'Expert', BigBend: 'Expert', Tennant: 'Standard', Meramec: 'Limited', Baker: 'Standard' },
    { service: 'Full Landscaping', Metro: 'None', BigBend: 'Expert', Tennant: 'Expert', Meramec: 'Limited', Baker: 'Expert' },
    { service: 'Pool Installation', Metro: 'None', BigBend: 'None', Tennant: 'None', Meramec: 'Expert', Baker: 'Expert' },
    { service: 'Snow Removal', Metro: 'None', BigBend: 'None', Tennant: 'Expert', Meramec: 'None', Baker: 'None' }
  ];

  const opportunities = [
    { area: 'Emergency Repair', demand: 'High', supply: 'Low', priority: 'Critical' },
    { area: 'Engineering Focus', demand: 'Medium', supply: 'Low', priority: 'High' },
    { area: 'Green Walls', demand: 'Growing', supply: 'None', priority: 'Medium' },
    { area: 'Smart Drainage', demand: 'Emerging', supply: 'Low', priority: 'Medium' },
    { area: 'Permit Services', demand: 'High', supply: 'Low', priority: 'High' }
  ];

  const OverviewTab = () => (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="font-semibold text-blue-900">Market Leader</h3>
          <p className="text-lg font-bold text-blue-700">Big Bend (30 yrs)</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <h3 className="font-semibold text-green-900">Engineering Leader</h3>
          <p className="text-lg font-bold text-green-700">Metro (8.5/10)</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
          <h3 className="font-semibold text-orange-900">Review Leader</h3>
          <p className="text-lg font-bold text-orange-700">Tennant (115)</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <h3 className="font-semibold text-purple-900">Warranty Leader</h3>
          <p className="text-lg font-bold text-purple-700">Metro (Lifetime)</p>
        </div>
      </div>

      {/* Rating vs Reviews Scatter Plot */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Market Position: Rating vs Review Volume</h3>
        <ResponsiveContainer width="100%" height={300}>
          <ScatterChart data={positioningData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="reviews" name="Review Count" />
            <YAxis dataKey="rating" domain={[4.5, 5.0]} name="Rating" />
            <Tooltip 
              content={({ active, payload }) => {
                if (active && payload && payload[0]) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-white p-2 border rounded shadow">
                      <p className="font-semibold">{data.name}</p>
                      <p>Rating: {data.rating}/5.0</p>
                      <p>Reviews: {data.reviews}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Scatter dataKey="rating">
              {positioningData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      {/* Competitive Radar */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Competitive Strengths Radar</h3>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 10]} />
            <Radar name="Metro" dataKey="MetroRetainingWalls" stroke="#1B3A57" fill="#1B3A57" fillOpacity={0.3} />
            <Radar name="Big Bend" dataKey="BigBendLandscaping" stroke="#708090" fill="#708090" fillOpacity={0.2} />
            <Radar name="Tennant" dataKey="TennantLandscape" stroke="#228B22" fill="#228B22" fillOpacity={0.2} />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const ReviewsTab = () => (
    <div className="space-y-6">
      {/* Review Comparison Chart */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Online Reputation Comparison</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={competitors}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="rating" fill="#1B3A57" name="Rating" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Detailed Review Metrics */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Review Details & BBB Status</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Company</th>
                <th className="text-left p-2">Rating</th>
                <th className="text-left p-2">Reviews</th>
                <th className="text-left p-2">BBB Status</th>
                <th className="text-left p-2">Warranty</th>
                <th className="text-left p-2">Years</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((comp, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-2 font-medium">{comp.name}</td>
                  <td className="p-2">{comp.rating}/5.0</td>
                  <td className="p-2">{comp.reviews}</td>
                  <td className="p-2">
                    <span className={`px-2 py-1 rounded text-xs ${comp.bbb === 'A+' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
                      {comp.bbb}
                    </span>
                  </td>
                  <td className="p-2">
                    <span className={`px-2 py-1 rounded text-xs ${comp.warranty === 'Lifetime' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'}`}>
                      {comp.warranty}
                    </span>
                  </td>
                  <td className="p-2">{comp.years}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Insights */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <h4 className="font-semibold text-yellow-800">Key Reputation Insights</h4>
        <ul className="text-yellow-700 mt-2 space-y-1">
          <li>• Metro ties for highest rating but has lowest review volume</li>
          <li>• Big Bend and Baker have A+ BBB ratings - competitive advantage</li>
          <li>• Metro's lifetime warranty is unique differentiator</li>
          <li>• Tennant has 4x more reviews than Metro despite similar age</li>
        </ul>
      </div>
    </div>
  );

  const ServicesTab = () => (
    <div className="space-y-6">
      {/* Service Matrix */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Service Capability Matrix</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Service</th>
                <th className="text-left p-2">Metro</th>
                <th className="text-left p-2">Big Bend</th>
                <th className="text-left p-2">Tennant</th>
                <th className="text-left p-2">Meramec</th>
                <th className="text-left p-2">Baker</th>
              </tr>
            </thead>
            <tbody>
              {serviceMatrix.map((service, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-2 font-medium">{service.service}</td>
                  {['Metro', 'BigBend', 'Tennant', 'Meramec', 'Baker'].map(comp => (
                    <td key={comp} className="p-2">
                      <span className={`px-2 py-1 rounded text-xs ${
                        service[comp] === 'Expert' ? 'bg-green-100 text-green-800' :
                        service[comp] === 'Standard' ? 'bg-blue-100 text-blue-800' :
                        service[comp] === 'Limited' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {service[comp]}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Strategic Positioning Chart */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Technical Expertise vs Price Positioning</h3>
        <ResponsiveContainer width="100%" height={400}>
          <ScatterChart data={positioningData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="expertise" name="Technical Expertise" domain={[5, 9]} />
            <YAxis dataKey="pricing" name="Price Level" domain={[5, 9]} />
            <Tooltip 
              content={({ active, payload }) => {
                if (active && payload && payload[0]) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-white p-2 border rounded shadow">
                      <p className="font-semibold">{data.name}</p>
                      <p>Expertise: {data.expertise}/10</p>
                      <p>Price Level: {data.pricing}/10</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Scatter dataKey="pricing" size={100}>
              {positioningData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const OpportunitiesTab = () => (
    <div className="space-y-6">
      {/* Market Opportunities */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Market Gap Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {opportunities.map((opp, idx) => (
            <div key={idx} className={`p-4 rounded-lg border-l-4 ${
              opp.priority === 'Critical' ? 'border-red-500 bg-red-50' :
              opp.priority === 'High' ? 'border-orange-500 bg-orange-50' :
              'border-yellow-500 bg-yellow-50'
            }`}>
              <h4 className="font-semibold">{opp.area}</h4>
              <p className="text-sm text-gray-600">Demand: {opp.demand}</p>
              <p className="text-sm text-gray-600">Supply: {opp.supply}</p>
              <span className={`inline-block mt-2 px-2 py-1 rounded text-xs ${
                opp.priority === 'Critical' ? 'bg-red-100 text-red-800' :
                opp.priority === 'High' ? 'bg-orange-100 text-orange-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {opp.priority} Priority
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* SWOT Analysis for Metro */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Metro Retaining Walls SWOT Analysis</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Strengths</h4>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• Owner's engineering degree</li>
              <li>• 26 years experience</li>
              <li>• NCMA/ICPI certified</li>
              <li>• Lifetime warranty</li>
              <li>• Specialized focus</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-2">Weaknesses</h4>
            <ul className="text-red-700 text-sm space-y-1">
              <li>• Customer service issues</li>
              <li>• Limited online reviews</li>
              <li>• No BBB accreditation</li>
              <li>• Communication delays</li>
              <li>• Smaller scale operations</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Opportunities</h4>
            <ul className="text-blue-700 text-sm space-y-1">
              <li>• Emergency repair market</li>
              <li>• Engineering expertise marketing</li>
              <li>• BBB accreditation</li>
              <li>• Green wall trends</li>
              <li>• Digital transformation</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-2">Threats</h4>
            <ul className="text-yellow-700 text-sm space-y-1">
              <li>• Big Bend market dominance</li>
              <li>• A+ BBB competitors</li>
              <li>• Labor shortage</li>
              <li>• Material cost volatility</li>
              <li>• New market entrants</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Action Items */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
        <h4 className="font-semibold text-blue-800">Immediate Action Items</h4>
        <ol className="text-blue-700 mt-2 space-y-1 list-decimal list-inside">
          <li>Implement customer service improvement program</li>
          <li>Apply for BBB accreditation</li>
          <li>Launch "Lifetime Warranty Advantage" marketing campaign</li>
          <li>Develop emergency repair service offering</li>
          <li>Create engineering expertise content marketing</li>
        </ol>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Metro Retaining Walls</h1>
        <p className="text-gray-600">Competitive Intelligence Dashboard</p>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-6">
        <nav className="flex space-x-4">
          {[
            { id: 'overview', label: 'Market Overview' },
            { id: 'reviews', label: 'Reputation Analysis' },
            { id: 'services', label: 'Service Comparison' },
            { id: 'opportunities', label: 'Growth Opportunities' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'reviews' && <ReviewsTab />}
        {activeTab === 'services' && <ServicesTab />}
        {activeTab === 'opportunities' && <OpportunitiesTab />}
      </div>
    </div>
  );
};

export default CompetitiveDashboard;
