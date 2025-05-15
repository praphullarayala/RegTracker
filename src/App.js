import React, { useState } from 'react';
import { Search, Calendar, Check, Clock, AlertTriangle, Filter } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('crr3');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRiskCategory, setFilterRiskCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterDocType, setFilterDocType] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Define CRR3 mandates data
  const crr3Mandates = [
    // Credit Risk
    { id: 'A', article: '20(8)', title: 'ITS on joint decision process for internal model applications', docType: 'ITS', consultation: '16-07-2024', finalReport: '17-03-2025', publishedOJ: '', status: 'on-time', riskCategory: 'Credit Risk' },
    { id: 'B', article: '36(5)', title: 'Monitor the activity of specialized debt restructurers and report on the results of such monitoring activity of specialized debt restructurers', docType: 'Report', consultation: 'n/a', finalReport: 'exp. 31-12-2028', publishedOJ: 'n/a', status: 'on-time', riskCategory: 'Credit Risk' },
    { id: 'C', article: '111(8)', title: 'RTS on criteria that institutions shall use to assign off-balance-sheet items, constraining factors for UCC and notification process', docType: 'RTS', consultation: '04-03-2024', finalReport: 'exp. 10-07-2025', publishedOJ: '', status: 'on-time', riskCategory: 'Credit Risk' },
    { id: 'D', article: '122a(4)', title: 'RTS on criteria for high-quality project finance', docType: 'RTS', consultation: '', finalReport: 'exp. 10-07-2026', publishedOJ: '', status: 'on-time', riskCategory: 'Credit Risk' },
    { id: 'E', article: '123(1)', title: 'Guidelines to specify proportionate diversification methods for retail definition', docType: 'Guidelines', consultation: '12-11-2024', finalReport: 'exp. 10-07-2025', publishedOJ: 'n/a', status: 'on-time', riskCategory: 'Credit Risk' },

    // Market Risk
    { id: 'A', article: '34(4)', title: 'RTS on extraordinary circumstances for prudent valuation', docType: 'RTS', consultation: '16-01-2024', finalReport: 'exp. 10-07-2026', publishedOJ: '', status: 'on-time', riskCategory: 'Market Risk' },
    { id: 'B', article: '94(10)', title: 'RTS on identifying the main risk driver of a position and the specification of long and short positions', docType: 'RTS', consultation: '24-04-2024', finalReport: '06-12-2024', publishedOJ: '', status: 'on-time', riskCategory: 'Market Risk' },

    // Operational Risk
    { id: 'A', article: '314(3)', title: 'Report on operational risk ILDC derogation', docType: 'Report', consultation: 'n/a', finalReport: 'exp. 31-12-2031', publishedOJ: 'n/a', status: 'on-time', riskCategory: 'Operational Risk' },

    // ESG
    { id: 'A', article: '501c(2)(a)', title: 'Report on analysis and recommendations on enhancements to the prudential framework', docType: 'Report', consultation: 'n/a', finalReport: '01-10-2023', publishedOJ: 'n/a', status: 'on-time', riskCategory: 'ESG' },

    // Reporting and Disclosure
    { id: 'A', article: '430(7)', title: '(Part 1) ITS on supervisory reporting – Basel III relevant', docType: 'ITS', consultation: '14-12-2023', finalReport: '09-07-2024', publishedOJ: '', status: 'on-time', riskCategory: 'Reporting and Disclosure' },
  ];

  // Define CRD VI mandates data
  const crdviMandates = [
    // Market Risk
    { id: 'A', article: '77(4)', title: 'RTS on the definition of material exposures to default risk and thresholds for material counterparties and positions in traded debt or equity instruments', docType: 'RTS', consultation: '', finalReport: 'No deadline indicated', publishedOJ: '', status: 'on-time', riskCategory: 'Market Risk' },
    { id: 'B', article: '104(4)', title: 'Guidelines on excessive CVA risk', docType: 'Guidelines', consultation: '', finalReport: 'No deadline indicated', publishedOJ: 'n/a', status: 'on-time', riskCategory: 'Market Risk' },

    // Publication
    { id: 'A', article: '106(1)', title: 'Guidelines on specific publication requirements', docType: 'Guidelines', consultation: '', finalReport: 'exp. 10-07-2025', publishedOJ: 'n/a', status: 'on-time', riskCategory: 'Publication' },

    // ESG
    { id: 'A', article: '87a(5)', title: 'Guidelines on the management of ESG risks', docType: 'Guidelines', consultation: '18-01-2024', finalReport: '08-01-2025', publishedOJ: 'n/a', status: 'on-time', riskCategory: 'ESG' },

    // Governance
    { id: 'A', article: '91(1e)', title: 'Guidelines to define how the enhanced dialogue to address suitability concerns shall be carried out', docType: 'Guidelines', consultation: '', finalReport: 'No deadline indicated', publishedOJ: 'n/a', status: 'on-time', riskCategory: 'Governance' },
  ];

  // Filter mandates based on search term and filters
  const filteredCRR3Mandates = crr3Mandates.filter(mandate => {
    const matchesSearch =
      mandate.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mandate.article.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mandate.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRiskCategory = filterRiskCategory === 'all' || mandate.riskCategory === filterRiskCategory;
    const matchesDocType = filterDocType === 'all' || mandate.docType === filterDocType;
    const matchesStatus = filterStatus === 'all' || mandate.status === filterStatus;

    return matchesSearch && matchesRiskCategory && matchesDocType && matchesStatus;
  });

  const filteredCRDVIMandates = crdviMandates.filter(mandate => {
    const matchesSearch =
      mandate.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mandate.article.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mandate.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRiskCategory = filterRiskCategory === 'all' || mandate.riskCategory === filterRiskCategory;
    const matchesDocType = filterDocType === 'all' || mandate.docType === filterDocType;
    const matchesStatus = filterStatus === 'all' || mandate.status === filterStatus;

    return matchesSearch && matchesRiskCategory && matchesDocType && matchesStatus;
  });

  // Get unique risk categories, document types for filter dropdowns
  const riskCategories = [...new Set([...crr3Mandates, ...crdviMandates].map(mandate => mandate.riskCategory))];
  const docTypes = [...new Set([...crr3Mandates, ...crdviMandates].map(mandate => mandate.docType))];

  // Reset filters
  const resetFilters = () => {
    setSearchTerm('');
    setFilterRiskCategory('all');
    setFilterStatus('all');
    setFilterDocType('all');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-indigo-800 text-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">RegTracker</h1>
              <p className="text-indigo-200">CRR3/CRD VI Regulatory Mandates Tracker</p>
            </div>
            <div className="text-right">
              <p className="text-indigo-200">Last updated: May 2025</p>
              <p className="text-sm text-indigo-300">By RegCounsel Financial Services B.V.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-6">
        {/* Tabs */}
        <div className="flex border-b mb-6">
          <button
            className={`py-2 px-4 font-medium ${activeTab === 'crr3' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('crr3')}
          >
            CRR3 Mandates
          </button>
          <button
            className={`py-2 px-4 font-medium ${activeTab === 'crdvi' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('crdvi')}
          >
            CRD VI Mandates
          </button>
          <button
            className={`py-2 px-4 font-medium ${activeTab === 'stats' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('stats')}
          >
            Statistics
          </button>
          <button
            className={`py-2 px-4 font-medium ${activeTab === 'about' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
        </div>

        {/* Search and filter row */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search by title, ID, or article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-5 w-5 mr-2" />
              Filters {showFilters ? '▲' : '▼'}
            </button>
          </div>

          {/* Filter options */}
          {showFilters && (
            <div className="mt-4 p-4 bg-white border rounded-md shadow-sm grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Risk Category</label>
                <select
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  value={filterRiskCategory}
                  onChange={(e) => setFilterRiskCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  {riskCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Document Type</label>
                <select
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  value={filterDocType}
                  onChange={(e) => setFilterDocType(e.target.value)}
                >
                  <option value="all">All Document Types</option>
                  {docTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">All Statuses</option>
                  <option value="on-time">On Time</option>
                  <option value="delayed">Delayed</option>
                  <option value="overdue">Overdue</option>
                </select>
              </div>
              <div className="md:col-span-3">
                <button
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={resetFilters}
                >
                  Reset Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* CRR3 Mandates Table */}
        {activeTab === 'crr3' && (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">CRR3 Regulatory Mandates</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Displaying {filteredCRR3Mandates.length} out of {crr3Mandates.length} mandates
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Article</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Category</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Consultation</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Final Report</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Published in OJ</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredCRR3Mandates.map((mandate) => (
                    <tr key={mandate.id + mandate.article} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mandate.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mandate.article}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{mandate.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          {mandate.docType}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mandate.riskCategory}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mandate.consultation}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mandate.finalReport}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mandate.publishedOJ}</td>
                    </tr>
                  ))}
                  {filteredCRR3Mandates.length === 0 && (
                    <tr>
                      <td colSpan="8" className="px-6 py-4 text-center text-sm text-gray-500">
                        No mandates found matching your filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* CRD VI Mandates Table */}
        {activeTab === 'crdvi' && (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">CRD VI Regulatory Mandates</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Displaying {filteredCRDVIMandates.length} out of {crdviMandates.length} mandates
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Article</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Category</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Consultation</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Final Report</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Published in OJ</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredCRDVIMandates.map((mandate) => (
                    <tr key={mandate.id + mandate.article} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mandate.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mandate.article}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{mandate.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          {mandate.docType}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mandate.riskCategory}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mandate.consultation}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mandate.finalReport}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mandate.publishedOJ}</td>
                    </tr>
                  ))}
                  {filteredCRDVIMandates.length === 0 && (
                    <tr>
                      <td colSpan="8" className="px-6 py-4 text-center text-sm text-gray-500">
                        No mandates found matching your filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Statistics View */}
        {activeTab === 'stats' && (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Regulatory Mandate Statistics</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Overview of CRR3 and CRD VI mandates by various metrics
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">

              {/* Document Type Distribution */}
              <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
                <h4 className="text-md font-medium text-gray-900 mb-4">Document Type Distribution</h4>
                <div className="space-y-2">
                  {docTypes.map(type => {
                    const count = [...crr3Mandates, ...crdviMandates].filter(m => m.docType === type).length;
                    const percentage = Math.round((count / [...crr3Mandates, ...crdviMandates].length) * 100);
                    return (
                      <div key={type}>
                        <div className="flex justify-between text-sm">
                          <span>{type}</span>
                          <span>{count} ({percentage}%)</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Risk Category Distribution */}
              <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
                <h4 className="text-md font-medium text-gray-900 mb-4">Risk Category Distribution</h4>
                <div className="space-y-2">
                  {riskCategories.map(category => {
                    const count = [...crr3Mandates, ...crdviMandates].filter(m => m.riskCategory === category).length;
                    const percentage = Math.round((count / [...crr3Mandates, ...crdviMandates].length) * 100);
                    return (
                      <div key={category}>
                        <div className="flex justify-between text-sm">
                          <span>{category}</span>
                          <span>{count} ({percentage}%)</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Status Summary */}
              <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
                <h4 className="text-md font-medium text-gray-900 mb-4">Publication Status</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-700">
                      {[...crr3Mandates, ...crdviMandates].filter(m => m.status === 'on-time').length}
                    </div>
                    <div className="text-sm text-green-600">On Time</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-700">
                      {[...crr3Mandates, ...crdviMandates].filter(m => m.status === 'delayed').length}
                    </div>
                    <div className="text-sm text-orange-600">Delayed</div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-red-700">
                      {[...crr3Mandates, ...crdviMandates].filter(m => m.status === 'overdue').length}
                    </div>
                    <div className="text-sm text-red-600">Overdue</div>
                  </div>
                </div>
              </div>

              {/* Timeline Overview */}
              <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
                <h4 className="text-md font-medium text-gray-900 mb-4">Timeline Overview</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-indigo-500 mr-2" />
                    <span className="text-sm text-gray-700">
                      <strong>Published in 2023-2024:</strong> {[...crr3Mandates, ...crdviMandates].filter(m =>
                        m.finalReport.includes('2023') || m.finalReport.includes('2024')).length} mandates
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-indigo-500 mr-2" />
                    <span className="text-sm text-gray-700">
                      <strong>Expected in 2025:</strong> {[...crr3Mandates, ...crdviMandates].filter(m =>
                        m.finalReport.includes('2025')).length} mandates
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-indigo-500 mr-2" />
                    <span className="text-sm text-gray-700">
                      <strong>Expected in 2026-2027:</strong> {[...crr3Mandates, ...crdviMandates].filter(m =>
                        m.finalReport.includes('2026') || m.finalReport.includes('2027')).length} mandates
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-indigo-500 mr-2" />
                    <span className="text-sm text-gray-700">
                      <strong>Expected after 2027:</strong> {[...crr3Mandates, ...crdviMandates].filter(m =>
                        m.finalReport.includes('2028') || m.finalReport.includes('2029') ||
                        m.finalReport.includes('2030') || m.finalReport.includes('2031')).length} mandates
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200">
              <h4 className="text-md font-medium text-gray-900 mb-4">Upcoming Publications (Next 6 Months)</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Regulation</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expected Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">CRR3</td>
                      <td className="px-6 py-4 text-sm text-gray-900">RTS on criteria that institutions shall use to assign off-balance-sheet items</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          RTS
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10-07-2025</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">CRD VI</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Guidelines on output floor and impact on the SREP</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          Guidelines
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10-04-2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* About Page */}
        {activeTab === 'about' && (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">About the RegTracker</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Understanding the CRR3/CRD VI Regulatory Mandates Tracker
              </p>
            </div>
            <div className="px-4 py-5 sm:px-6">
              <div className="prose max-w-none">
                <h4>What does this tracker do?</h4>
                <p>
                  This tracker monitors the regulatory mandates given to the European Banking Authority ("EBA")
                  by the European legislature under the third Capital Requirements Regulation ("CRR3") and sixth
                  Capital Requirements Directive ("CRD VI").
                </p>

                <h4>What is a mandate?</h4>
                <p>
                  A mandate is a specific authority or assignment given to one of the three European Supervisory
                  Authorities to perform a designated task, such as reporting, providing guidance, or creating market standards.
                </p>

                <h4>What is the legislative process?</h4>
                <p>
                  The legislative process for RTS and ITS consists of four phases:
                </p>
                <ol>
                  <li>The EBA publishes a consultation paper to gather market feedback;</li>
                  <li>The EBA issues a final draft report;</li>
                  <li>The European Commission either adopts it (with possible amendments) or rejects it (possibly eliciting an Opinion from the EBA);</li>
                  <li>The adopted regulation is published in the Official Journal (OJ) of the European Union.</li>
                </ol>
                <p>
                  Guidelines and reports are published by the EBA without having to follow (all) these stages.
                </p>

                <h4>How is the tracker structured?</h4>
                <p>
                  The tracker organises mandates by risk category (e.g., credit risk, market risk, operational risk)
                  wherever possible. Within each category, mandates are listed in the order of their respective articles.
                </p>
                <p>
                  For each mandate assigned to the EBA, we provide:
                </p>
                <ul>
                  <li>Title and type (e.g., Guideline, Report, RTS or ITS).</li>
                  <li>Publication status at each of the three legislative stages: consultation paper, final report,
                    and Official Journal publication (wherever applicable), with links to documents when available.</li>
                  <li>Expected timeline for publication, indicated as 'exp. dd-mm-yyyy'.</li>
                </ul>

                <h4>Status indicators</h4>
                <ul>
                  <li>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      <Check size={12} className="mr-1"/> Green
                    </span>
                    <span className="ml-2">for on-time publications</span>
                  </li>
                  <li>
                    <span className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800">
                      <Clock size={12} className="mr-1"/> Orange
                    </span>
                    <span className="ml-2">for delayed publications</span>
                  </li>
                  <li>
                    <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                      <AlertTriangle size={12} className="mr-1"/> Red
                    </span>
                    <span className="ml-2">for overdue and unpublished documents</span>
                  </li>
                </ul>

                <h4>Contact Information</h4>
                <p>This RegTracker is maintained by RegCounsel Financial Services B.V.</p>
                <p>
                  <strong>Address:</strong> A.J. Ernststraat 595-F, 1082 LD Amsterdam, The Netherlands<br />
                  <strong>Website:</strong> <a href="https://www.recofise.eu" className="text-indigo-600 hover:text-indigo-800">www.recofise.eu</a><br />
                  <strong>Email:</strong> <a href="mailto:info@recofise.eu" className="text-indigo-600 hover:text-indigo-800">info@recofise.eu</a><br />
                  <strong>Tel:</strong> +31 (20) 520 68 54
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-600">&copy; 2025 RegCounsel Financial Services B.V. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-gray-600 hover:text-indigo-600">Terms of Service</a>
              <a href="#" className="text-sm text-gray-600 hover:text-indigo-600">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-600 hover:text-indigo-600">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;