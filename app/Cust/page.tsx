"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { 
  Plus, Search, Trash2, Edit, CheckCircle, 
  Clock, X, User, Calendar, CreditCard, TrendingUp, Users, Wallet, Download, IndianRupee, Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Customer {
  id: string;
  name: string;
  mobile: string; // Added Mobile
  startDate: string;
  lastDate: string;
  isPaid: boolean;
  price: number;
  advancePaid: number;
}

export default function OmSaiUltimateDashboard() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('om-sai-v4');
    if (saved) setCustomers(JSON.parse(saved));
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) localStorage.setItem('om-sai-v4', JSON.stringify(customers));
  }, [customers, isLoaded]);

  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({ 
    name: '', mobile: '', startDate: '', lastDate: '', isPaid: false, price: 0, advancePaid: 0 
  });

  const stats = useMemo(() => ({
    total: customers.length,
    revenueCollected: customers.reduce((acc, curr) => acc + Number(curr.advancePaid) + (curr.isPaid ? (Number(curr.price) - Number(curr.advancePaid)) : 0), 0),
    pendingBalance: customers.reduce((acc, curr) => acc + (curr.isPaid ? 0 : (Number(curr.price) - Number(curr.advancePaid))), 0),
  }), [customers]);

  const filteredCustomers = useMemo(() => {
    return customers.filter(c => 
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      c.mobile.includes(searchQuery)
    );
  }, [customers, searchQuery]);

  const downloadInvoice = (customer: Customer) => {
    const invoiceWindow = window.open('', '_blank');
    if (!invoiceWindow) return;

    const balance = customer.isPaid ? 0 : (customer.price - customer.advancePaid);

    const html = `
      <html>
        <head>
          <title>Invoice - ${customer.name}</title>
          <style>
            body { font-family: 'Segoe UI', sans-serif; padding: 40px; color: #333; line-height: 1.6; }
            .header { text-align: center; border-bottom: 3px solid #be185d; padding-bottom: 20px; }
            .shop-name { font-size: 32px; font-weight: 900; color: #be185d; margin: 0; text-transform: uppercase; }
            .details { margin-top: 30px; display: flex; justify-content: space-between; }
            table { width: 100%; margin-top: 40px; border-collapse: collapse; }
            th { background: #fdf2f8; text-align: left; padding: 15px; border-bottom: 2px solid #be185d; font-size: 14px; }
            td { padding: 15px; border-bottom: 1px solid #eee; }
            .summary-box { margin-top: 30px; margin-left: auto; width: 300px; background: #f9f9f9; padding: 20px; border-radius: 10px; }
            .summary-row { display: flex; justify-content: space-between; margin-bottom: 10px; }
            .grand-total { border-top: 2px solid #ddd; pt: 10px; font-weight: bold; color: #be185d; font-size: 18px; }
            .footer { margin-top: 60px; text-align: center; font-size: 12px; color: #777; border-top: 1px solid #eee; padding-top: 20px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 class="shop-name">OM SAI LADIES TAILOR</h1>
            <p>Quality Stitching & Designs | Sarva Square, Harni, Vadodara</p>
          </div>
          <div class="details">
            <div>
              <p><strong>CLIENT:</strong> ${customer.name}</p>
              <p><strong>MOBILE:</strong> +91 ${customer.mobile}</p>
              <p><strong>DATE:</strong> ${customer.startDate}</p>
            </div>
            <div style="text-align: right">
              <p><strong>ORDER ID:</strong> #OS-${customer.id.slice(-4)}</p>
              <p><strong>DELIVERY:</strong> ${customer.lastDate}</p>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>SERVICE DESCRIPTION</th>
                <th>TOTAL AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Custom Tailoring / Stitching</td>
                <td>₹${customer.price}</td>
              </tr>
            </tbody>
          </table>
          <div class="summary-box">
            <div class="summary-row"><span>Subtotal:</span> <span>₹${customer.price}</span></div>
            <div class="summary-row" style="color: #059669;"><span>Advance Paid:</span> <span>- ₹${customer.advancePaid}</span></div>
            <div class="summary-row grand-total">
              <span>${customer.isPaid ? 'PAID IN FULL' : 'REMAINING:'}</span> 
              <span>₹${balance}</span>
            </div>
          </div>
          <div class="footer">
            <p>Thank you for your business! Please bring this receipt during trial/pickup.</p>
          </div>
          <script>window.print();</script>
        </body>
      </html>
    `;
    invoiceWindow.document.write(html);
    invoiceWindow.document.close();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalData = { 
      ...formData, 
      isPaid: formData.isPaid || (formData.advancePaid >= formData.price && formData.price > 0),
      startDate: formData.startDate || new Date().toISOString().split('T')[0]
    };
    if (editingId) {
      setCustomers(customers.map(c => c.id === editingId ? { ...finalData, id: editingId } : (c as any)));
    } else {
      setCustomers([{ ...finalData, id: Date.now().toString() }, ...customers] as any);
    }
    closeModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
    setFormData({ name: '', mobile: '', startDate: '', lastDate: '', isPaid: false, price: 0, advancePaid: 0 });
  };

  if (!isLoaded) return null;

  return (
    <div className="min-h-screen bg-[#FDFCFD] pb-20 font-sans">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-pink-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-pink-600 p-2 rounded-xl">
              <IndianRupee className="text-white" size={20} />
            </div>
            <h1 className="text-xl font-black text-slate-800">Om Sai Billing</h1>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-4" />
              <input 
                type="text" placeholder="Search Name or Mobile..." 
                className="w-full pl-10 pr-4 py-2.5 bg-slate-100 rounded-xl outline-none text-sm font-medium"
                value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button onClick={() => setIsModalOpen(true)} className="bg-slate-900 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-pink-600 transition-colors">
              <Plus size={18}/> New Customer
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard label="Total Collected" value={`₹${stats.revenueCollected}`} color="green" icon={<TrendingUp size={20}/>} />
          <StatCard label="Balance to Collect" value={`₹${stats.pendingBalance}`} color="rose" icon={<Wallet size={20}/>} />
          <StatCard label="Active Orders" value={stats.total} color="slate" icon={<Users size={20}/>} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredCustomers.map((customer) => {
              const isPartiallyPaid = !customer.isPaid && customer.advancePaid > 0;
              const remaining = customer.price - customer.advancePaid;

              return (
                <motion.div
                  key={customer.id} layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-[2.5rem] p-7 border border-slate-100 shadow-sm hover:shadow-xl transition-all group relative"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                      customer.isPaid ? 'bg-green-100 text-green-700' : isPartiallyPaid ? 'bg-blue-100 text-blue-700' : 'bg-rose-100 text-rose-700'
                    }`}>
                      {customer.isPaid ? 'Fully Paid' : isPartiallyPaid ? 'Partially Paid' : 'Unpaid'}
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => { setEditingId(customer.id); setFormData(customer as any); setIsModalOpen(true); }} className="text-slate-300 hover:text-blue-500"><Edit size={16}/></button>
                      <button onClick={() => { if(confirm("Delete?")) setCustomers(customers.filter(c => c.id !== customer.id)) }} className="text-slate-300 hover:text-rose-500"><Trash2 size={16}/></button>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 leading-tight">{customer.name}</h3>
                  <p className="text-sm font-medium text-slate-500 flex items-center gap-1 mt-1"><Phone size={12}/> {customer.mobile}</p>
                  
                  <div className="mt-4 flex items-end justify-between">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Total Bill</p>
                      <p className="text-xl font-black text-slate-900">₹{customer.price}</p>
                    </div>
                    {!customer.isPaid && (
                      <div className="text-right">
                        <p className="text-[10px] font-bold text-blue-500 uppercase">Balance Due</p>
                        <p className="text-xl font-black text-blue-600">₹{remaining}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-slate-50 flex justify-between items-center text-xs">
                    <span className="text-slate-500 flex items-center gap-1"><Calendar size={14}/> {customer.lastDate}</span>
                    <button onClick={() => downloadInvoice(customer)} className="text-pink-600 font-bold flex items-center gap-1 hover:underline">
                      <Download size={14}/> Invoice
                    </button>
                  </div>

                  {!customer.isPaid && (
                    <button 
                      onClick={() => setCustomers(customers.map(c => c.id === customer.id ? {...c, isPaid: true} : c))}
                      className="w-full mt-4 py-3 rounded-2xl bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-green-600 transition-colors"
                    >
                      Clear Full Payment
                    </button>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </main>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white w-full max-w-md rounded-[3rem] p-10 relative shadow-2xl">
              <button onClick={closeModal} className="absolute top-8 right-8 text-slate-400"><X/></button>
              <h2 className="text-2xl font-black mb-6 text-slate-800">{editingId ? 'Edit Order' : 'New Order'}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Client Name</label>
                  <input required className="w-full bg-slate-50 p-4 rounded-2xl outline-none font-bold focus:ring-2 focus:ring-pink-100" type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Mobile Number</label>
                  <input required className="w-full bg-slate-50 p-4 rounded-2xl outline-none font-bold focus:ring-2 focus:ring-pink-100" type="tel" maxLength={10} value={formData.mobile} onChange={e => setFormData({...formData, mobile: e.target.value.replace(/\D/g, '')})} placeholder="Enter 10 digit number" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Total Price (₹)</label>
                    <input required className="w-full bg-slate-50 p-4 rounded-2xl outline-none font-bold" type="number" value={formData.price} onChange={e => setFormData({...formData, price: Number(e.target.value)})} />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-blue-500 uppercase ml-1">Advance Paid (₹)</label>
                    <input className="w-full bg-blue-50/50 p-4 rounded-2xl outline-none font-bold text-blue-700 border border-blue-100" type="number" value={formData.advancePaid} onChange={e => setFormData({...formData, advancePaid: Number(e.target.value)})} />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Delivery Date</label>
                  <input required className="w-full bg-slate-50 p-4 rounded-2xl outline-none font-bold" type="date" value={formData.lastDate} onChange={e => setFormData({...formData, lastDate: e.target.value})} />
                </div>
                
                <label className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl cursor-pointer group hover:bg-pink-50 transition-colors">
                  <input type="checkbox" className="size-5 rounded text-pink-600 focus:ring-0" checked={formData.isPaid} onChange={e => setFormData({...formData, isPaid: e.target.checked})} />
                  <span className="text-xs font-bold text-slate-600 group-hover:text-pink-700">Payment Fully Received</span>
                </label>

                <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black uppercase tracking-widest shadow-xl transition-all active:scale-95 hover:bg-pink-600">
                  Save Customer Record
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function StatCard({ label, value, color, icon }: any) {
  const themes: any = {
    green: "text-green-600 bg-green-50",
    rose: "text-rose-600 bg-rose-50",
    slate: "text-slate-600 bg-slate-50"
  };
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
      <div className={`p-3 rounded-xl ${themes[color]}`}>{icon}</div>
      <div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</p>
        <p className="text-2xl font-black text-slate-800">{value}</p>
      </div>
    </div>
  );
}