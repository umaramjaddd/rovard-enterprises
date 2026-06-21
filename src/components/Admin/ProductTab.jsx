"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { addProduct, updateProduct, deleteProduct } from "@/api/adminAPI";
import { fetchProducts } from "../../Redux/Slices/productsSlice";

export default function ProductTab() {
  const dispatch = useDispatch();

  const { subCategories } = useSelector((state) => state.admin);
  const { products, loading } = useSelector((state) => state.products);

  const [hasMounted, setHasMounted] = useState(false);
  const [status, setStatus] = useState(null);
  
  // Edit Tracker Identity Hook
  const [editingId, setEditingId] = useState(null);

  // Form Management State
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    material: "",
    sub_category_id: "",
    thumbnail: null, // Track existing string URLs during edits
    images: [],      // Track existing gallery strings during edits
  });

  // Staged File Hooks for Storage Engine Upload loops
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [otherImageFiles, setOtherImageFiles] = useState([]);

  useEffect(() => {
    setHasMounted(true);
    if (!products || products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products?.length]);

  // Handle Multi-file attachment queue selections
  const handleOtherImagesChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setOtherImageFiles((prev) => [...prev, ...filesArray]);
    }
  };

  // Remove fresh local file from staging queue before submission
  const removeQueuedFile = (indexToRemove) => {
    setOtherImageFiles((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  // Remove an ALREADY SAVED cloud asset string from product data locally during editing
  const removeExistingImage = (urlToRemove) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((url) => url !== urlToRemove)
    }));
  };

  // Populate form workbench inputs and smoothly snap view upwards
  const handleEditInit = (prod) => {
    setEditingId(prod.id);
    setFormData({
      name: prod.name,
      description: prod.description || "",
      price: prod.price,
      material: prod.material || "",
      sub_category_id: prod.sub_category_id || "",
      thumbnail: prod.thumbnail,
      images: prod.images || [],
    });
    // Clear any loose unsubmitted files from a previous run
    setThumbnailFile(null);
    setOtherImageFiles([]);
    
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Reset form status configurations to baseline
  const resetWorkbench = () => {
    setEditingId(null);
    setFormData({ name: "", description: "", price: "", material: "", sub_category_id: "", thumbnail: null, images: [] });
    setThumbnailFile(null);
    setOtherImageFiles([]);
    setStatus(null);
  };

  const getSubCategoryLabel = (subId) => {
    if (!subCategories || subCategories.length === 0) return "---";
    const sub = subCategories.find((s) => s.id === Number(subId));
    return sub ? sub.name : "Unassigned Specialty";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.sub_category_id) {
      return alert("Please map all mandatory field metadata specs.");
    }

    setStatus("loading");
    try {
      if (editingId) {
        // --- EXECUTE UPDATE FLOW ---
        await updateProduct(editingId, formData, thumbnailFile, otherImageFiles);
        setStatus("success");
      } else {
        // --- EXECUTE CREATION FLOW ---
        if (!thumbnailFile) {
          setStatus(null);
          return alert("A primary layout showcase image thumbnail is required to seed items.");
        }
        await addProduct(formData, thumbnailFile, otherImageFiles);
        setStatus("success");
      }

      resetWorkbench();
      dispatch(fetchProducts());
    } catch (error) {
      console.error("Workbench Form Action Runtime Defect:", error);
      setStatus("error");
      alert("Relational mutation run error occurred.");
    }
  };

  const handleDeleteClick = async (id, name) => {
    if (!window.confirm(`Are you sure you want to completely erase "${name}"?`)) return;
    try {
      await deleteProduct(id);
      if (editingId === id) resetWorkbench();
      dispatch(fetchProducts());
    } catch (error) {
      console.error("Purge Core Failure:", error);
    }
  };

  if (!hasMounted) return null;

  return (
    <div className="w-full text-white bg-zinc-950 p-4 space-y-12 animate-in fade-in duration-500">
      
      {/* --- ROW 1: TOP PANEL WORKBENCH (FORM) --- */}
      <div className="w-full bg-zinc-900/40 p-8 border border-white/5 backdrop-blur-sm shadow-2xl space-y-6">
        <div className="flex items-center justify-between border-b border-zinc-800/60 pb-4">
          <div className="flex items-center gap-3 text-amber-500">
            <Icon icon={editingId ? "ri:edit-circle-line" : "ri:hammer-line"} className="text-2xl" />
            <h2 className="font-serif text-xl uppercase tracking-widest text-white">
              {editingId ? "Modify Armoury Piece" : "Armoury Forge"} 
              <span className="text-zinc-500 font-sans text-sm tracking-normal font-light ml-2">
                {editingId ? `| Modifying System Log Row ID #${editingId}` : "| New Item Matrix"}
              </span>
            </h2>
          </div>
          {editingId && (
            <button 
              type="button" 
              onClick={resetWorkbench} 
              className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white border border-zinc-800 px-3 py-1.5 bg-zinc-950 rounded transition-colors"
            >
              Cancel Edit Mode
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Piece Title</label>
              <input
                type="text"
                required
                className="w-full bg-zinc-950 border border-zinc-800 p-4 text-white text-sm focus:border-amber-600 outline-none transition-all"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Acquisition Value (PKR)</label>
              <input
                type="number"
                required
                className="w-full bg-zinc-950 border border-zinc-800 p-4 text-white text-sm focus:border-amber-600 outline-none transition-all"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Material Composition</label>
              <input
                type="text"
                className="w-full bg-zinc-950 border border-zinc-800 p-4 text-white text-sm focus:border-amber-600 outline-none transition-all"
                value={formData.material}
                onChange={(e) => setFormData({ ...formData, material: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Specialized Sub-Category Scope</label>
              <div className="relative">
                <select
                  required
                  className="w-full bg-zinc-950 border border-zinc-800 p-4 text-white text-sm focus:border-amber-600 outline-none appearance-none cursor-pointer"
                  value={formData.sub_category_id}
                  onChange={(e) => setFormData({ ...formData, sub_category_id: e.target.value })}
                >
                  <option value="">Select Sub-Category Line...</option>
                  {subCategories?.map((sub) => (
                    <option key={sub.id} value={sub.id}>{sub.name.toUpperCase()}</option>
                  ))}
                </select>
                <Icon icon="ri:arrow-down-s-line" className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Historical / Design Context Narrative</label>
              <input
                type="text"
                className="w-full bg-zinc-950 border border-zinc-800 p-4 text-white text-sm focus:border-amber-600 outline-none transition-all"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>
          </div>

          {/* ASSET UPLOAD STACK ROW MAPS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Primary Thumbnail File Block */}
            <div className="p-5 border border-dashed border-zinc-800 bg-zinc-950/50 rounded flex flex-col justify-between">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.3em] text-amber-600 font-bold mb-2">
                  {editingId ? "Replace Primary Thumbnail" : "Showcase Primary Thumbnail Asset"}
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setThumbnailFile(e.target.files?.[0] || null)}
                  className="text-xs text-zinc-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-zinc-800 file:text-zinc-200 hover:file:bg-zinc-700 cursor-pointer"
                />
              </div>

              {/* Show current production asset string if editing */}
              {editingId && formData.thumbnail && !thumbnailFile && (
                <div className="mt-4 flex items-center gap-3 bg-zinc-900/80 p-2 border border-white/5 rounded">
                  <img src={formData.thumbnail} alt="" className="w-10 h-12 object-cover rounded border border-zinc-800" />
                  <span className="text-[10px] text-zinc-500 italic truncate">Active Profile asset linked online</span>
                </div>
              )}
              {thumbnailFile && (
                <p className="text-[11px] text-emerald-500 mt-3 flex items-center gap-1">
                  <Icon icon="ri:checkbox-circle-line" /> Staged New Target Override: {thumbnailFile.name}
                </p>
              )}
            </div>

            {/* Gallery Arrays Input Block */}
            <div className="p-5 border border-dashed border-zinc-800 bg-zinc-950/50 rounded">
              <label className="block text-[10px] uppercase tracking-[0.3em] text-amber-600 font-bold mb-1">
                {editingId ? "Append Gallery Sub-Images" : "Auxiliary Vault Image Arrays"}
              </label>
              <span className="block text-[11px] text-zinc-500 mb-3">Attach multiple supplemental profile structural views.</span>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleOtherImagesChange}
                className="text-xs text-zinc-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-zinc-800 file:text-zinc-200 hover:file:bg-zinc-700 cursor-pointer"
              />

              {/* Render Existing Image array objects with inline purge buttons */}
              {editingId && formData.images.length > 0 && (
                <div className="mt-3 border-t border-zinc-900 pt-3">
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-zinc-500 mb-2 font-mono">Live Vault Images:</span>
                  <div className="flex flex-wrap gap-2 max-h-24 overflow-y-auto">
                    {formData.images.map((url, idx) => (
                      <div key={idx} className="relative group/img w-12 h-14 bg-zinc-900 border border-zinc-800 rounded overflow-hidden">
                        <img src={url} alt="" className="w-full h-full object-cover" />
                        <button 
                          type="button" 
                          onClick={() => removeExistingImage(url)}
                          className="absolute inset-0 bg-red-900/80 text-white flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity"
                        >
                          <Icon icon="ri:delete-bin-line" width="14" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Staged New Queue entries indicators */}
              {otherImageFiles.length > 0 && (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-24 overflow-y-auto pr-1">
                  {otherImageFiles.map((file, idx) => (
                    <div key={idx} className="flex justify-between items-center text-[11px] bg-zinc-900 p-2 border border-white/5 rounded">
                      <span className="truncate pr-2 text-zinc-400">{file.name}</span>
                      <button type="button" onClick={() => removeQueuedFile(idx)} className="text-red-400 hover:text-red-500">
                        <Icon icon="ri:close-circle-line" width="16" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full md:w-64 bg-amber-700 hover:bg-amber-600 py-4 text-[10px] uppercase font-bold tracking-[0.3em] text-white transition-all flex items-center justify-center gap-2 disabled:bg-zinc-800 disabled:text-zinc-500 shadow-lg"
            >
              {status === "loading" ? <Icon icon="ri:loader-4-line" className="animate-spin" /> : <Icon icon="ri:shield-flash-line" />}
              {editingId ? "Update Masterwork Profile" : "Commit item to Armoury"}
            </button>
          </div>
        </form>
      </div>

      {/* --- ROW 2: BOTTOM PANEL ACTIVE CATALOG LIST --- */}
      <div className="w-full border border-white/5 bg-zinc-900/10 backdrop-blur-md shadow-2xl overflow-hidden">
        <div className="p-6 bg-zinc-950/60 border-b border-zinc-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon icon="ri:archive-line" className="text-zinc-500 text-lg" />
            <h3 className="font-serif text-md text-zinc-300 uppercase tracking-widest">Active Manifest Inventory</h3>
          </div>
          <span className="text-[10px] tracking-widest bg-zinc-900 text-zinc-400 px-3 py-1 border border-zinc-800 rounded-full font-mono">
            {products ? products.length : 0} Total Units Entered
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-950/40 border-b border-zinc-800/40">
                <th className="p-4 text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold">Weapon Profile Asset</th>
                <th className="p-4 text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold">Sub-Category Line</th>
                <th className="p-4 text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold">Material Blueprint</th>
                <th className="p-4 text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold">Value Metric</th>
                <th className="p-4 text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold text-center">Gallery Stack</th>
                <th className="p-4 text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold text-right">Registry Override</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/40">
              {products?.map((prod) => (
                <tr key={prod.id} className={`hover:bg-white/[0.01] transition-colors group ${editingId === prod.id ? "bg-amber-500/[0.03]" : ""}`}>
                  
                  <td className="p-4 flex items-center gap-3">
                    <div className="w-12 h-14 bg-zinc-950 border border-zinc-800 overflow-hidden flex-shrink-0 rounded shadow-md">
                      {prod.thumbnail ? (
                        <img src={prod.thumbnail} alt="" className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[9px] text-zinc-700">N/A</div>
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-zinc-100">{prod.name}</div>
                      <div className="text-[9px] text-zinc-600 font-mono tracking-tight mt-0.5">DB_ID: #{prod.id}</div>
                    </div>
                  </td>

                  <td className="p-4">
                    <span className="inline-block text-[10px] uppercase tracking-wider px-2.5 py-1 bg-zinc-950 border border-zinc-800/80 text-amber-600/90 rounded">
                      {getSubCategoryLabel(prod.sub_category_id)}
                    </span>
                  </td>

                  <td className="p-4 text-sm text-zinc-400 font-light max-w-xs truncate">
                    {prod.material || <span className="text-zinc-700 italic">No Specs Set</span>}
                  </td>
                  
                  <td className="p-4 text-sm font-mono text-zinc-300">PKR {prod.price}</td>

                  <td className="p-4 text-center">
                    <span className="inline-flex items-center gap-1 text-[10px] tracking-wide px-2 py-1 bg-zinc-950/80 border border-zinc-800/60 text-zinc-500 rounded">
                      <Icon icon="ri:stack-line" className="text-zinc-600" />
                      {prod.images ? prod.images.length : 0} Images Archived
                    </span>
                  </td>

                  {/* Actions column rendering dual operation buttons on focus */}
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-4 md:opacity-30 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => handleEditInit(prod)}
                        className="text-zinc-400 hover:text-amber-500 transition-colors"
                        title="Edit Masterwork Entry"
                      >
                        <Icon icon="ri:edit-2-line" width="18" />
                      </button>
                      <button
                        onClick={() => handleDeleteClick(prod.id, prod.name)}
                        className="text-zinc-400 hover:text-red-500 transition-colors"
                        title="Purge Entry Row"
                      >
                        <Icon icon="ri:delete-bin-7-line" width="18" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {products?.length === 0 && (
          <div className="p-12 text-center text-xs tracking-widest text-zinc-600 uppercase border-t border-zinc-900">
            No items registered inside this collection registry manifest.
          </div>
        )}
      </div>
    </div>
  );
}